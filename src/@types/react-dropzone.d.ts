declare module 'react-dropzone' {

  export interface DropzoneProps {
    onDrop?: <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void;
    accept?: string | string[];
    disabled?: boolean;
    maxSize?: number;
    minSize?: number;
    multiple?: boolean;
    preventDropOnDocument?: boolean;
    noClick?: boolean;
    noKeyboard?: boolean;
    noDrag?: boolean;
    noDragEventsBubbling?: boolean;
    onDragEnter?: (event: DragEvent) => void;
    onDragLeave?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    onDropAccepted?: <T extends File>(acceptedFiles: T[], event: DragEvent) => void;
    onDropRejected?: <T extends File>(fileRejections: FileRejection[], event: DragEvent) => void;
    onFileDialogCancel?: () => void;
  }

  export interface FileRejection {
    file: File;
    errors: FileError[];
  }

  export interface FileError {
    code: string;
    message: string;
  }

  export type DropEvent = DragEvent | Event;

  export function useDropzone(props: DropzoneProps): {
    getRootProps: (props?: DropzoneProps) => any;
    getInputProps: () => any;
    isDragActive: boolean;
    isDragAccept: boolean;
    isDragReject: boolean;
    draggedFiles: File[];
    acceptedFiles: File[];
    fileRejections: FileRejection[];
    open: () => void;
  };
}
