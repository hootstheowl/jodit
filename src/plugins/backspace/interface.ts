/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * @module plugins/backspace
 */

export type DeleteMode = 'char' | 'word' | 'sentence';

declare module 'jodit/types/events' {
	interface IEventEmitter {
		/**
		 * Allows you to prepare the content before deletion or completely override the deletion logic if you return true
		 */
		on(
			event: 'backSpaceBeforeCases',
			callback: (backspace: boolean, fakeNode: Node) => void | true
		): this;

		/**
		 * Emits after backspace or delete key pressed and were processed
		 */
		on(
			event: 'backSpaceAfterDelete',
			callback: (backspace: boolean, fakeNode: Node) => void
		): this;
	}
}

declare module 'jodit/types/jodit' {
	interface IJodit {
		/**
		 * Backspace plugin: Remove next character or selected text
		 */
		execCommand(command: 'deleteButton'): void;

		/**
		 * Backspace plugin: Remove previous character or selected text
		 */
		execCommand(command: 'backspaceButton'): void;

		/**
		 * Backspace plugin: Remove next word or selected text
		 */
		execCommand(command: 'deleteWordButton'): void;

		/**
		 * Backspace plugin: Remove previous word or selected text
		 */
		execCommand(command: 'backspaceWordButton'): void;

		/**
		 * Backspace plugin: Remove next sentence or selected text
		 */
		execCommand(command: 'deleteSentenceButton'): void;

		/**
		 * Backspace plugin: Remove previous sentence or selected text
		 */
		execCommand(command: 'backspaceSentenceButton'): void;
	}
}
