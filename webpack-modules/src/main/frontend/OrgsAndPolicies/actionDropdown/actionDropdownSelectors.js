/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { selectOrgsAndPoliciesSlice } from 'MainRoot/OrgsAndPolicies/orgsAndPoliciesSelectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectActionDropdownSlice = createSelector(
  selectOrgsAndPoliciesSlice,
  ({ ownerActions: { actionDropdown } }) => actionDropdown
);
