"use client";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import { SparkleIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { ProjectsList } from "./projects-list";
import { VscDebugStart } from "react-icons/vsc";
import { useEffect, useState } from "react";
import ProjectsCommandDialog from "./projects-command-dialog";
import Image from "next/image";
import { ImportGithubDialog } from "./import-github-dialog";
import { NewProjectDialog } from "./new-project-dialog";
import { StarterTemplateDialog } from "./starter-template-dialog";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ProjectsView = () => {
  const [commandDialogOpen, setCommandDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [newProjectDialogOpen, setNewProjectDialogOpen] = useState(false);
  const [starterTemplateDialogOpen, setStarterTemplateDialogOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === "k") {
          e.preventDefault();
          setCommandDialogOpen(true);
        }

        if (e.key === "i") {
          e.preventDefault();
          setImportDialogOpen(true);
        }

        if (e.key === "j") {
          e.preventDefault();
          setNewProjectDialogOpen(true);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <ProjectsCommandDialog
        open={commandDialogOpen}
        onOpenChange={setCommandDialogOpen}
      />
      <ImportGithubDialog open={importDialogOpen} onOpenChange={setImportDialogOpen} />
      <NewProjectDialog open={newProjectDialogOpen} onOpenChange={setNewProjectDialogOpen} />
      <StarterTemplateDialog open={starterTemplateDialogOpen} onOpenChange={setStarterTemplateDialogOpen} />
      <div className="min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 items-center">
          <div className="flex justify-between gap-4 w-full items-center">
            <div className="flex items-center gap-2 w-full group/logo">
              <Image
                src="/logo.svg"
                alt="codexia"
                className="size-[32px] md:size-[46px]"
                width={32}
                height={32}
              />
              <h1
                className={cn(
                  "text-4xl md:text-5xl font-semibold",
                  font.className
                )}
              >
                Codexia
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setNewProjectDialogOpen(true);
                }}
                className="h-full items-start justify-start p-4 bg-background border flex flex-col rounded-none"
              >
                <div className="flex items-center justify-between w-full">
                  <SparkleIcon className="size-4" />
                  <Kbd className="bg-accent border">⌘J</Kbd>
                </div>
                <div>
                  <span className="text-sm">New</span>
                </div>
              </Button>
              <Button
                variant="outline"
                onClick={() => { setStarterTemplateDialogOpen(true) }}
                className="h-full items-start justify-start p-4 bg-background border flex flex-col rounded-none"
              >
                <div className="flex items-center justify-between w-full">
                  <VscDebugStart className="size-4" />
                  <Kbd className="bg-accent border">⌘J</Kbd>
                </div>
                <div>
                  <span className="text-sm text-wrap truncate">Create with Starter Template</span>
                </div>
              </Button>
              <Button
                variant="outline"
                onClick={() => { setImportDialogOpen(true) }}
                className="h-full items-start justify-start p-4 bg-background border flex flex-col rounded-none"
              >
                <div className="flex items-center justify-between w-full">
                  <FaGithub className="size-4" />
                  <Kbd className="bg-accent border">⌘I</Kbd>
                </div>
                <div>
                  <span className="text-sm">Import</span>
                </div>
              </Button>
            </div>
            <ProjectsList onViewAll={() => setCommandDialogOpen(true)} />
          </div>
        </div>
      </div>
    </>
  );
};
