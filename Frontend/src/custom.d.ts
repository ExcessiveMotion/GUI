// Required to be able to import .svg directly from TypeScript
declare module "*.svg" {
    const content: string;
    export default content;
}
