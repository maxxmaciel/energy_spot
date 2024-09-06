
declare module 'react-treebeard' {
  import * as React from 'react';

  interface StructureTreeNode {

    cod_arquivo_estrutura: number;
    cod_arquivo_estrutura_pai: number;
    cod_projeto: number;
    total: number;
    cod_arquivo: number;
    arquivos: number;
    e_arquivo_tipo: string | null;
    e_orientacao: string | null;
    blob?: ArrayBuffer;
    e_arquivo_tipo: string;
    uploading?: boolean;
    uploadProgress?: number;
    uploaded?: boolean; // Adiciona um campo para indicar se o upload está completo
  }

  export interface TreeNode extends StructureTreeNode {
    name: string;
    id: number;
    children?: TreeNode[];
    toggled?: boolean;
    active?: boolean;
  }



  interface TreebeardProps {
    data: TreeNode;
    onToggle?: (node: TreeNode, toggled: boolean) => void;
    decorators?: any;
    style?: any;
  }

  export class Treebeard extends React.Component<TreebeardProps, any> { }
}
