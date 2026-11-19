export declare const vertexShader = "#version 300 es\nvoid main() {\n    vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);\n    gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);\n}";
export declare const geometryShader: string;
export declare const productShader: string;
export declare const reductionShader: string;
export declare const displayShader: string;
export declare const projectedVertexShader = "#version 300 es\nlayout(location=0) in vec4 aVertex;\nuniform vec2 uOffset;\nuniform vec2 uSize;\nout vec2 vGrid;\nvoid main() {\n    vec2 p=(aVertex.xy+uOffset)/uSize;\n    gl_Position=vec4(p.x*2.0-1.0,1.0-p.y*2.0,0.0,1.0);\n    vGrid=aVertex.zw;\n}";
export declare const projectedDisplayShader: string;
