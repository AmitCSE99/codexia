import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TemplateNode } from "../../../../convex/projects";
import { nextJsTemplate, reactViteTemplate } from "../templates";
import { useCreateProject } from "../hooks/use-projects";
import { adjectives, animals, colors, uniqueNamesGenerator } from "unique-names-generator";
import { useRouter } from "next/navigation";

enum TEMPLATE_TYPE {
    REACT_VITE = "React_Vite",
    NEXT_JS = "NextJs"
}

const starterTemplatesConfig = [
    {
        name: "React + Vite",
        type: TEMPLATE_TYPE.REACT_VITE,
        icon: FaReact,
        description: "React + Vite starter template",
        color: "61DBFB"
    },
    {
        name: "Next.js",
        type: TEMPLATE_TYPE.NEXT_JS,
        icon: SiNextdotjs,
        description: "Next.js starter template",
        color: "61DBFB"
    }
]

interface StarterTemplateDialog {
    open: boolean;
    onOpenChange: (open: boolean) => void
}

const getTemplateNode = (type: TEMPLATE_TYPE): TemplateNode[] => {
    if (type === TEMPLATE_TYPE.REACT_VITE) {
        return reactViteTemplate;
    }
    if (type === TEMPLATE_TYPE.NEXT_JS) {
        return nextJsTemplate;
    }
    return [];
}

export const StarterTemplateDialog = ({ open, onOpenChange }: StarterTemplateDialog) => {

    const createProject = useCreateProject();
    const router = useRouter();


    const handleStarterTemplateSelect = async (type: TEMPLATE_TYPE) => {
        const templateNodes = getTemplateNode(type);

        const projectName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors],
            separator: "-",
            length: 3,
        });

        const projectId = await createProject({
            name: projectName,
            template: templateNodes
        });

        onOpenChange(false);

        router.push(`/projects/${projectId}`);

    }

    return (<Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[80vh] overflow-auto">
            <DialogHeader>
                <DialogTitle>Create from Starter Templates</DialogTitle>
                <DialogDescription>
                    Choose from the starter templates below
                </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3">
                {
                    starterTemplatesConfig.map((starterConfig) => {
                        const Icon = starterConfig.icon;
                        return (<Button key={starterConfig.name}
                            variant="outline"
                            onClick={() => { handleStarterTemplateSelect(starterConfig.type) }}
                            className="h-full items-start justify-start p-4 bg-background border flex flex-col rounded-none"
                        >
                            <div className="flex items-center justify-between w-full">
                                <Icon color={starterConfig.color} className="size-8" />
                            </div>
                            <div>
                                <span className="text-sm text-wrap truncate">{starterConfig.description}</span>
                            </div>
                        </Button>)
                    })
                }
            </div>
        </DialogContent>
    </Dialog>)
}