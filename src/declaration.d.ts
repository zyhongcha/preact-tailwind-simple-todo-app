declare module "*.css" {
    const mapping: Record<string, string>;
    export default mapping;
}
declare module "\*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }