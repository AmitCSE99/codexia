import { Button } from "@/components/ui/button"
import { Doc, Id } from "../../../../convex/_generated/dataModel"
import { CopyIcon, HistoryIcon, LoaderIcon, PlusIcon } from "lucide-react"
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation"
import { PromptInput, PromptInputBody, PromptInputFooter, PromptInputMessage, PromptInputSubmit, PromptInputTextarea, PromptInputTools } from "@/components/ai-elements/prompt-input"
import { useConversation, useConversations, useCreateConversation, useMessages } from "../hooks/use-conversations"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Message, MessageAction, MessageActions, MessageContent, MessageResponse } from "@/components/ai-elements/message"
import ky from "ky"
import PastConversationsDialog from "./past-conversations-dialog"
import { DEFAULT_CONVERSATION_TITLE } from "../constants"


type MessageWithOptimistic = Doc<"messages">

const ConversationSidebar = ({ projectId }: {
    projectId: Id<"projects">
}) => {
    const [pastConversationsOpen, setPastConversationsOpen] = useState(false);
    const [preSubmitCount, setPreSubmitCount] = useState<number | null>(null);
    const [input, setInput] = useState("")
    const [selectedConversationId, setSelectedConversationId] = useState<Id<"conversations"> | null>(null)
    const createConversation = useCreateConversation();
    const [optimisticMessage, setOptimisticMessage] = useState<MessageWithOptimistic | null>(null);

    const conversations = useConversations(projectId);

    const activeConversationId = selectedConversationId ?? conversations?.[0]?._id ?? null;

    const activeConversation = useConversation(activeConversationId);

    const conversationMessages = useMessages(activeConversationId);

    const serverMessages = conversationMessages ?? [];

    const allMessages = optimisticMessage
        ? [...serverMessages, optimisticMessage]
        : serverMessages;


    const isProcessing = conversationMessages?.some(
        (msg) => msg.status === "processing"
    )

    const handleCancel = async () => {
        try {
            await ky.post("/api/messages/cancel", {
                json: {
                    projectId
                }
            })
        } catch {
            toast.error("Unable to cancel the request")
        }
    }

    const handleCreateConversation = async () => {
        try {
            const newConversationId = await createConversation({
                projectId,
                title: DEFAULT_CONVERSATION_TITLE
            });

            setSelectedConversationId(newConversationId);

            return newConversationId;
        } catch {
            toast.error("Unable to create new conversation");
            return null;
        }
    }

    const handleSubmit = async (message: PromptInputMessage) => {
        if (isProcessing && !message.text) {
            await handleCancel()
            setInput("");
            return;
        }

        let conversationId = activeConversationId;
        if (!conversationId) {
            conversationId = await handleCreateConversation();
            if (!conversationId) {
                return;
            }
        }
        setPreSubmitCount(serverMessages.length);

        const userText = message.text.trim();
        if (!userText) return;

        const userId = crypto.randomUUID();

        const optimisticUser: MessageWithOptimistic = {
            _id: userId as Id<"messages">,
            role: "user" as const,
            content: userText,
            status: "completed" as const,
            _creationTime: Date.now(),
            projectId: projectId,
            conversationId
        };

        setOptimisticMessage(optimisticUser);
        setInput("");

        try {
            await ky.post("/api/messages", {
                json: {
                    conversationId,
                    message: userText
                }
            })
        } catch {
            toast.error("Message failed to send!");
            setOptimisticMessage(null)
        }
    }

    useEffect(() => {
        if (!conversationMessages || !optimisticMessage || preSubmitCount === null) return;

        if (conversationMessages.length > preSubmitCount) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOptimisticMessage(null);
            setPreSubmitCount(null);
        }
    }, [conversationMessages, optimisticMessage, preSubmitCount]);

    return (
        <>
            <PastConversationsDialog open={pastConversationsOpen} projectId={projectId} onOpenChange={setPastConversationsOpen} onSelect={setSelectedConversationId} />
            <div className="flex flex-col h-full bg-sidebar">
                <div className="h-8.75 flex items-center justify-between border-b">
                    <div className="text-sm truncate pl-3">
                        {activeConversation?.title ?? DEFAULT_CONVERSATION_TITLE}
                    </div>
                    <div className="flex items-center px-1 gap-1">
                        <Button size="icon-xs" variant="highlight" onClick={() => setPastConversationsOpen(true)}>
                            <HistoryIcon className="size-3.5" />
                        </Button>
                        <Button onClick={handleCreateConversation} size="icon-xs" variant="highlight">
                            <PlusIcon className="size-3.5" />
                        </Button>
                    </div>
                </div>
                <Conversation className="flex-1">
                    <ConversationContent>
                        {
                            allMessages.map((message, messageIndex) => (
                                <Message key={message._id} from={message.role}>
                                    <MessageContent>
                                        {
                                            message.status === "processing" ? (
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <LoaderIcon className="size-4 animate-spin" />
                                                    <span>Thinking...</span>
                                                </div>
                                            ) : message.status === "cancelled" ? (
                                                <span className="text-muted-foreground italic">Request Cancelled</span>
                                            ) :

                                                (
                                                    <MessageResponse>{message.content}</MessageResponse>
                                                )
                                        }
                                    </MessageContent>
                                    {
                                        message.role === "assistant" &&
                                        message.status === "completed" &&
                                        messageIndex === (conversationMessages?.length ?? 0) - 1 &&
                                        (
                                            <MessageActions>
                                                <MessageAction onClick={() => {
                                                    navigator.clipboard.writeText(message.content)
                                                }}>
                                                    <CopyIcon className="size-3" />
                                                </MessageAction>
                                            </MessageActions>
                                        )
                                    }
                                </Message>
                            ))
                        }
                    </ConversationContent>
                    <ConversationScrollButton />
                </Conversation>
                <div className="p-3">
                    <PromptInput onSubmit={handleSubmit} className="mt-2">
                        <PromptInputBody>
                            <PromptInputTextarea placeholder="Ask Codexia anything...." onChange={(e) => { setInput(e.target.value) }} value={input} disabled={isProcessing || !!optimisticMessage} />
                        </PromptInputBody>
                        <PromptInputFooter>
                            <PromptInputTools />
                            <PromptInputSubmit disabled={isProcessing ? false : !input} status={isProcessing ? "streaming" : undefined} />
                        </PromptInputFooter>
                    </PromptInput>
                </div>
            </div>
        </>
    )
}

export default ConversationSidebar