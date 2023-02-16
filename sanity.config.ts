import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["settings"]);

export default defineConfig({
  basePath: "/studio",
  name: "Finns_Portfolio",
  title: "Finn's Portfolio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Allgemeine Einstellungen").id("generalConfig").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("generalConfig").documentId("generalConfig")
            ),

            // Regular document types
            S.documentTypeListItem("project").title("Projekte"),
            S.documentTypeListItem("socialIcon").title("Social Media Icons"),
            S.documentTypeListItem("technology").title("Technologien"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
