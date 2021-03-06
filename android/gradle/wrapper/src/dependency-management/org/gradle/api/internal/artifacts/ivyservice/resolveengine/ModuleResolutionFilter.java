/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradle.api.internal.artifacts.ivyservice.resolveengine;

import org.gradle.api.artifacts.ModuleIdentifier;
import org.gradle.internal.component.model.IvyArtifactName;

/**
 * Manages sets of exclude rules, allowing union and intersection operations on the rules.
 */
public interface ModuleResolutionFilter {
    /**
     * Should this module be included in the resolution result?
     */
    boolean acceptModule(ModuleIdentifier module);

    /**
     * Should this artifact be included in the resolution result?
     */
    boolean acceptArtifact(ModuleIdentifier module, IvyArtifactName artifact);

    /**
     * Determines if this filter accepts the same set of modules as the other.
     *
     * @return true if the filters accept the same set of modules. Returns false if they may not, or if it is unknown.
     */
    boolean acceptsSameModulesAs(ModuleResolutionFilter other);

    /**
     * Returns a filter that accepts the union of those module versions and artifacts that are accepted by this filter and the other.
     * The union accepts if either of the inputs filters accepts.
     */
    ModuleResolutionFilter union(ModuleResolutionFilter other);

    /**
     * Returns a filter that accepts the union of those module versions and artifacts that are accepted by this filter and the other.
     * The intersection accepts if both of the inputs filters accept.
     */
    ModuleResolutionFilter intersect(ModuleResolutionFilter other);
}
