/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import { reduceStringDateToDay } from '../../util/dateUtils';

// Copied from our AngularCommon library
export default function agoLastDayFilter() {
  return reduceStringDateToDay;
}
