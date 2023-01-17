
import { join, normalize } from 'path';

import {
  Rule, SchematicContext, Tree, SchematicsException,
  apply, chain, MergeStrategy, mergeWith, move, url, template
} from '@angular-devkit/schematics';


import { getWorkspace } from '@schematics/angular/utility/workspace';

import { Schema as DemoComponentOptions } from './schema';


export async function configureOptions(
  options: DemoComponentOptions, host: Tree): Promise<Tree> {

    const workspace = await getWorkspace(host);

    if (!options.project) {
      options.project = workspace.projects.keys().next().value;
    }

    const project = workspace.projects.get(options.project || '');
    if (!project) {
      throw new SchematicsException(`Project not found: ${options.project}`);
    }

    options.path = join(normalize(project.root), 'src');
    return host;
}


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function demoComponent(_options: DemoComponentOptions): Rule {
  return async (tree: Tree, _context: SchematicContext) => {

    await configureOptions(_options, tree);

    const movePath = normalize(_options.path + "/");
    const templateSource = apply(url('./files/src'), [
      template({..._options}),
      move(movePath)
    ]);



    return chain([mergeWith(templateSource, MergeStrategy.Overwrite)]);
  };
}
