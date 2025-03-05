/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import { prop } from 'ramda';
import { createSelector } from '@reduxjs/toolkit';

export const selectSuccessMetricsConfigurationSlice = prop('successMetricsConfiguration');

export const selectSuccessMetricsConfigurationViewState = createSelector(
  selectSuccessMetricsConfigurationSlice,
  prop('viewState')
);

export const selectSuccessMetricsConfigurationFormState = createSelector(
  selectSuccessMetricsConfigurationSlice,
  prop('formState')
);
