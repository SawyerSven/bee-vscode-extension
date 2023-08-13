import * as vscode from 'vscode';
import content from '../snippets/content';

export default () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showInformationMessage(`未找到激活的编辑器窗口`);
    return;
  }

  const currentPosition = editor.selection.active;
  const { scss } = content;

  editor.edit(eb => {
    eb.insert(currentPosition, scss);
  });
};