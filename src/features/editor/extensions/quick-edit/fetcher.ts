import ky from "ky";
import { toast } from "sonner";
import { z } from "zod";

const editRequestSchema = z.object({
    selectedCode: z.string(),
    fullCode: z.string(),
    instruction: z.string()
})

const editReponseSchema = z.object({
    editedCode: z.string()
})

type EditRequest = z.infer<typeof editRequestSchema>;
type EditResponse = z.infer<typeof editReponseSchema>;


export const fetcher = async (payload: EditRequest, signal: AbortSignal): Promise<string | null> => {
    try {
        const validatedPayload = editRequestSchema.parse(payload);

        const response = await ky
            .post("/api/quick-edit", {
                json: validatedPayload,
                signal,
                timeout: 30_000,
                retry: 0
            })
            .json<EditResponse>()
        const validatedResponse = editReponseSchema.parse(response);

        return validatedResponse.editedCode || null;
    } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
            return null;
        }
        toast.error("Failed to fetch AI quick edit")
        return null;
    }
}