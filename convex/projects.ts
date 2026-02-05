import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { verifyAuth } from "./auth";
import { Id } from "./_generated/dataModel";

export type TemplateNode = {
  type: "file" | "folder",
  name: string,
  content?: string,
  children?: TemplateNode[]
}

// Validator for TemplateNode (using v.any() for recursive children)
const templateNodeValidator = v.object({
  type: v.union(v.literal("file"), v.literal("folder")),
  name: v.string(),
  content: v.optional(v.string()),
  children: v.optional(v.array(v.any())) // Use v.any() for recursive structure
});

export const create = mutation({
  args: {
    name: v.string(),
    template: v.optional(
      v.array(templateNodeValidator)
    )
  },
  handler: async (ctx, args) => {
    const identity = await verifyAuth(ctx);
    const projectId = await ctx.db.insert("projects", {
      name: args.name,
      ownerId: identity.subject,
      updatedAt: Date.now(),
    });

    const createTemplate = async (filesTree: TemplateNode[], parentId?: Id<"files">) => {
      for (const tree of filesTree) {
        if (tree.type === "file") {
          // const files = await ctx.db
          //   .query("files")
          //   .withIndex("by_project_parent", (q) => q.eq("projectId", projectId).eq("parentId", parentId))
          //   .collect();
          const now = Date.now();

          await ctx.db.insert("files", {
            projectId: projectId,
            name: tree.name,
            content: tree.content,
            type: "file",
            parentId: parentId,
            updatedAt: now
          })

          await ctx.db.patch("projects", projectId, {
            updatedAt: now
          })
        } else {
          // const files = await ctx.db
          //   .query("files")
          //   .withIndex("by_project_parent", (q) => q.eq("projectId", projectId).eq("parentId", parentId))
          //   .collect();
          const now = Date.now();

          const newParentId = await ctx.db.insert("files", {
            projectId: projectId,
            name: tree.name,
            type: "folder",
            parentId: parentId,
            updatedAt: now
          })
          await ctx.db.patch("projects", projectId, {
            updatedAt: now
          });

          if (tree.children && tree.children.length > 0) {
            await createTemplate(tree.children, newParentId);
          }
        }
      }
    }

    if (args.template) {
      await createTemplate(args.template);
    }

    return projectId;
  },
});

export const getPartial = query({
  args: {
    limit: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await verifyAuth(ctx);
    return await ctx.db
      .query("projects")
      .withIndex("by_owner", (q) => q.eq("ownerId", identity.subject))
      .order("desc")
      .take(args.limit);
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await verifyAuth(ctx);
    return await ctx.db
      .query("projects")
      .withIndex("by_owner", (q) => q.eq("ownerId", identity.subject))
      .order("desc")
      .collect();
  },
});

export const getById = query({
  args: {
    id: v.id("projects"),
  },
  handler: async (ctx, args) => {
    const identity = await verifyAuth(ctx);
    const project = await ctx.db.get("projects", args.id);

    if (!project) {
      throw new Error("Project not found!");
    }

    if (project.ownerId !== identity.subject) {
      throw new Error("Unauthorized access to this project");
    }

    return project;
  },
});

export const rename = mutation({
  args: {
    id: v.id("projects"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await verifyAuth(ctx);
    const project = await ctx.db.get("projects", args.id);

    if (!project) {
      throw new Error("Project not found!");
    }

    if (project.ownerId !== identity.subject) {
      throw new Error("Unauthorized access to this project");
    }

    await ctx.db.patch("projects", args.id, {
      name: args.name,
      updatedAt: Date.now(),
    });
  },
});

export const updateSettings = mutation({
  args: {
    id: v.id("projects"),
    settings: v.object({
      installCommand: v.optional(v.string()),
      devCommand: v.optional(v.string())
    })
  },
  handler: async (ctx, args) => {
    const identity = await verifyAuth(ctx);

    const project = await ctx.db.get("projects", args.id);

    if (!project) {
      throw new Error("Project not found");
    }

    if (project.ownerId !== identity.subject) {
      throw new Error("Unauthorized access to the project")
    }

    await ctx.db.patch("projects", args.id, {
      settings: args.settings,
      updatedAt: Date.now()
    })
  }
})
