import { readFileSync } from "fs";
import * as vscode from 'vscode';
export const readFile = (filePath: string): string => {
  try {
    return readFileSync(filePath, { encoding: 'utf-8' });
  }
  catch (e) {
    vscode.window.showErrorMessage(`获取文件内容失败`, e as string);
    return "";
  }
};