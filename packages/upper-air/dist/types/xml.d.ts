export interface SimpleXmlNode {
    name: string;
    attributes: Record<string, string>;
    text?: string;
    children: SimpleXmlNode[];
}
export declare const parseSimpleXml: (source: string) => SimpleXmlNode;
