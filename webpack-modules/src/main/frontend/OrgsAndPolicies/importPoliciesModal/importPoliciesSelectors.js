/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { createSelector } from '@reduxjs/toolkit';

import { selectOrgsAndPoliciesSlice } from '../orgsAndPoliciesSelectors';

export const selectImportPoliciesSlice = createSelector(
  selectOrgsAndPoliciesSlice,
  ({ ownerActions: { importPolicies } }) => importPolicies
);
