/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { connect } from 'react-redux';
import { stateGo } from '../../reduxUiRouter/routerActions';
import { actions } from '../ldap/ldapConfigSlice';
import EditLdapConnection from './EditLdapConnection';
import withLdapHeader from './withLdapHeader';

export default connect(
  ({ ldapConfig, router }) => ({
    ...ldapConfig,
    router,
  }),
  {
    ...actions,
    stateGo,
  }
)(withLdapHeader(EditLdapConnection, { formId: 'ldap-edit-connection' }));
