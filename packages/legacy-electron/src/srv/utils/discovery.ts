import * as fs from 'fs'
import * as chokidar from 'chokidar'

import * as fileFinder from 'node-find-files'

export type FinderFilter = (path:string, stats:fs.Stats) => boolean

export function findFilesAddedSince(repoPath:string, predicate:FinderFilter, action:(path:string) => any) : Promise<void> {
	return new Promise<void>((resolve, reject) => {
		let finder = new fileFinder({
			rootFolder: repoPath,
			filterFunction: predicate
		});

		finder.on('match', action);
		finder.on('patherror', reject);
		finder.on('error', reject);
		finder.on('complete', resolve);

		finder.startSearch();
	});
}

export function initializeFileWatcher(repoPath:string, action:(path:string) => any) : Promise<void> {
	return new Promise<void>(resolve => {
		chokidar.watch(repoPath, { persistent: true, ignoreInitial: true })
			.on('add', action)
			.on('ready', resolve)
	})
}