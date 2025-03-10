/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import React from 'react';
import { NxButton, NxModal, NxTextLink } from '@sonatype/react-shared-components';
import * as PropTypes from 'prop-types';

function EulaModal({ closeModal, updateLicense }) {
  return (
    <NxModal onClose={closeModal} id="eulaModal">
      <header className="nx-modal-header">
        <h2 className="nx-h2">End User License Agreement</h2>
      </header>
      <div className="nx-modal-content">
        <h3>PLEASE READ THIS AGREEMENT CAREFULLY</h3>
        <p>
          YOU MUST BE AUTHORIZED TO BIND THE ENTITY REQUESTING ACCESS TO THE PRODUCTS (&quot;COMPANY&quot;) AND, AS
          SUCH, BY CLICKING ON THE &quot;I ACCEPT&quot; (OR SIMILAR CONSENT) BUTTON, COMPANY HEREBY ACCEPTS ALL OF THE
          TERMS AND CONDITIONS OF THIS END USER LICENSE AGREEMENT (THE &quot;AGREEMENT&quot;). COMPANY AGREES THAT THIS
          AGREEMENT IS ENFORCEABLE LIKE ANY WRITTEN NEGOTIATED AGREEMENT EXECUTED BY AN AUTHORIZED REPRESENTATIVE OF
          COMPANY.
        </p>
        <p>
          IF COMPANY DOES NOT AGREE TO ALL OF THESE TERMS AND CONDITIONS, DO NOT CLICK TO ACCEPT OR OTHERWISE (A)
          DOWNLOAD, INSTALL OR USE ALL OR ANY PORTION OF THE PRODUCT, OR (B) ACCEPT OR USE ALL OR ANY PORTION OF THE
          SERVICES (INCLUDING PRODUCT MAINTENANCE). COMPANY WILL NOT BE GIVEN ACCESS TO ANY PRODUCT OR SERVICES UNLESS
          AND UNTIL COMPANY ACCEPTS THE TERMS OF THIS AGREEMENT. IF COMPANY HAS PAID A SUBSCRIPTION FEE FOR USE OF ANY
          PRODUCT AND DOES NOT AGREE TO THESE TERMS, YOU MAY RETURN SUCH PRODUCTS FOR A FULL REFUND PROVIDED YOU (A) DO
          NOT ACCESS OR USE THE PRODUCT AND (B) RETURN THE PRODUCT WITHIN THIRTY (30) DAYS OF YOUR INITIAL PURCHASE.
        </p>
        <p>
          IF COMPANY HAS ENTERED INTO A SEPARATE WRITTEN AGREEMENT WITH SONATYPE FOR USE OF THE PRODUCT OR SERVICES, THE
          TERMS AND CONDITIONS OF SUCH OTHER AGREEMENT SHALL PREVAIL OVER ANY CONFLICTING TERMS OR CONDITIONS IN THIS
          AGREEMENT.
        </p>
        <p>
          This Agreement is entered into by Company and Sonatype, Inc. (&quot;Sonatype&quot;) and governs Company&apos;s
          use of and access to all Products to which Company has requested access and/or for which Company has purchased
          a subscription as well as the provision of related Services.
        </p>
        <h3>1. DEFINITIONS</h3>
        <p>
          <strong>&quot;Affiliates&quot;</strong> means any entity that is controlled by, under the control of, or under
          common control with a Party where &quot;control&quot; means ownership of, or the right to control, greater
          than 50% of the voting securities of such entity.
        </p>
        <p>
          <strong>&quot;Application&quot;</strong> means any computer software application.
        </p>
        <p>
          <strong>&quot;Application ID&quot;</strong> means the unique identifier that is assigned to each Application
          Scan Unit for purposes of being scanned by a Product.
        </p>
        <p>
          <strong>&quot;Application Scan Unit&quot;</strong> means an Application, or any part thereof, that is assigned
          a unique Application ID for purposes of being scanned by a Product.
        </p>
        <p>
          <strong>&quot;Contractor&quot;</strong> means any third party engaged by Company to perform services for the
          benefit of Company.
        </p>
        <p>
          <strong>&quot;Data Feed&quot;</strong> means any and all data, including data related to open source projects,
          components, and metadata, that is developed, maintained and/or curated by Sonatype and made available by
          Sonatype to Company, whether via one or more Product(s), the Reports, or otherwise.
        </p>
        <p>
          <strong>&quot;Documentation&quot;</strong> means the user guide and technical specifications for the Products
          delivered by Sonatype along with the Products as may be updated by Sonatype from time to time.
        </p>
        <p>
          <strong>&quot;Effective Date&quot;</strong> means the date on which Customer accepts the terms and conditions
          of this Agreement by clicking the &quot;I Accept&quot; button.
        </p>
        <p>
          <strong>&quot;Open Source Software&quot;</strong> means any third-party open source software or other similar
          community or free software (including software code licensed under any version of the GNU GPL, MIT, Mozilla or
          Apache licenses).
        </p>
        <p>
          <strong>&quot;Order Form&quot;</strong> means a document governing purchases made by Company hereunder of
          Product Subscriptions and/or related Training Services that is accepted by each Party pursuant to the terms
          set forth therein.
        </p>
        <p>
          <strong>&quot;Ordering Document&quot;</strong> means any and all Order Forms and/or Renewal Quotes,
          collectively and/or individually.
        </p>
        <p>
          <strong>&quot;Product&quot;</strong> means Sonatype&apos;s software application(s): (a) identified in one or
          more Ordering Document(s) (including any and all related Data Feed(s)) and for which Company purchases a
          Subscription pursuant to the terms of this Agreement; or (b) to which Sonatype grants Company access for the
          sole purposes of evaluating such software application in accordance with Section 2 below.
        </p>
        <p>
          <strong>&quot;Product Maintenance&quot;</strong> means the support and maintenance services to be performed by
          Sonatype as further set forth in this Agreement.
        </p>
        <p>
          <strong>&quot;Renewal Quote&quot;</strong> means a document governing renewal purchases of Product
          Subscriptions and/or related Training Services made by Company hereunder that is accepted by each Party
          pursuant to the terms set forth therein.
        </p>
        <p>
          <strong>&quot;Reports&quot;</strong> means any reports or other data generated by the Products by, for, and/or
          on behalf of Company.
        </p>
        <p>
          <strong>&quot;Software Component Identifiers&quot;</strong> means certain software binaries, header files,
          hashed data and/or other metadata that serve to identify a software component.
        </p>
        <p>
          <strong>&quot;Subscription&quot;</strong> means the right and license granted to Company by Sonatype to use
          the Products in accordance with the terms of this Agreement during the specified Subscription Term.
        </p>
        <p>
          <strong>&quot;Subscription Term&quot;</strong> has the meaning set forth in Section 11(b) of this Agreement.
        </p>
        <p>
          <strong>&quot;User&quot;</strong> means an individual for whom a Subscription for the Products must be
          purchased as required in this Agreement, including Section 3(c) hereof.
        </p>
        <p>
          Sonatype and Company may be referred to individually in this agreement as a <strong>&quot;Party&quot;</strong>{' '}
          or collectively as the <strong>&quot;Parties.&quot;</strong>
        </p>
        <h3>2. FREE TRIAL</h3>
        <p>
          With regard to any permitted access to and use of the Products by Company related to a free trial, evaluation,
          license key extension or other non-production use authorized by Sonatype (the &quot;Free Use&quot;), Sonatype
          agrees to make such Products available to Company for a term to expire on the earlier of: (a) the end of the
          free trial period for which you registered to use the Product; or (b) the start date of any Subscriptions for
          such Product purchased by Company from Sonatype (the &quot;Free Use Period&quot;). Additional terms and
          conditions governing such Free Use may be imposed by Sonatype, and any such additional terms and conditions
          are incorporated into this Agreement by reference and are legally binding. ANY DATA THAT COMPANY ENTERS INTO
          THE PRODUCTS, AND ANY PERMITTED CUSTOMIZATIONS MADE TO THE PRODUCTS BY OR FOR COMPANY, DURING THE FREE USE
          PERIOD WILL BE PERMANENTLY LOST UNLESS (a) COMPANY PURCHASES A SUBSCRIPTION TO THE SAME PRODUCTS AS THOSE
          COVERED BY THE FREE USE OR (b) EXPORTS SUCH DATA BEFORE THE END OF THE FREE USE PERIOD. COMPANY CANNOT
          TRANSFER DATA ENTERED OR CUSTOMIZATIONS MADE DURING THE FREE USE PERIOD TO A PRODUCT THAT WOULD BE A DOWNGRADE
          FROM THAT USED DURING THE FREE USE PERIOD AND, THEREFORE, IF COMPANY PURCHASES A PRODUCT THAT WOULD BE A
          DOWNGRADE COMPANY MUST EXPORT ITS DATA BEFORE THE END OF THE FREE USE PERIOD OR IT WILL BE PERMANENTLY LOST.
          NOTWITHSTANDING SECTION 8 (WARRANTIES AND DISCLAIMERS), DURING THE FREE USE PERIOD THE PRODUCTS ARE PROVIDED
          &quot;AS-IS&quot; WITHOUT ANY WARRANTY.
        </p>
        <h3>3. PRODUCTS</h3>
        <p>
          <strong>a. Order Forms; Delivery.</strong> Each Ordering Document shall form a part of this Agreement and be
          subject to the terms and conditions set forth herein. All Products and Documentation shall be delivered by
          electronic means (&quot;Delivery&quot;). Company agrees that Company&apos;s purchases hereunder are neither
          contingent on the delivery of any future functionality or features nor dependent on any oral or written public
          comments made by Sonatype regarding future functionality or features.
        </p>
        <p>
          <strong>b. License; Subscriptions.</strong> Sonatype grants to Company a non-transferable, non-assignable
          (except as otherwise stated in Section 13(h)), non-sublicensable, non-exclusive, limited license to use the
          Products for Company&apos;s internal business purposes only, subject to the terms of this Agreement and the
          applicable Ordering Document. Any additional Subscriptions purchased by Company during a Subscription Term
          will be prorated for the remainder of that Subscription Term and will terminate on the date on which the
          Subscription Term expires. Company agrees that the Products will only be used in accordance with the
          Documentation and that it will be responsible for all use of the Products on Company&apos;s behalf by its
          employees and Contractors.
        </p>
        <p>
          <strong>c. User-Based Subscriptions.</strong> With regard to Subscriptions that are purchased by Company on a
          per-User basis as specified in the applicable Ordering Document, unless otherwise specified in the Ordering
          Document, (i) a separate Subscription must be purchased for each individual (including all employees,
          Contractors, and subcontractors of Company, and subject to Section 2(h), Company&apos;s Affiliates and
          Contractors) who: (A) produces, consumes, or evaluates one or more software artifacts that is/are stored in or
          scanned, analyzed or otherwise evaluated by the Product, and/or (B) evaluates or in any way uses any Reports
          generated by the Products; (ii) the Subscriptions may not be accessed by more than the licensed number of
          Users, and (iii) Subscriptions are restricted for use by designated Users only and cannot be shared or used by
          more than one User; provided that Company may reassign a Subscription to a new User replacing a former User
          who no longer requires ongoing use of or access to the Products.
        </p>
        <p>
          <strong>d. Application-Based Subscriptions.</strong> With regard to Subscriptions that are purchased by
          Company on a per-Application basis as specified in the applicable Ordering Document, unless otherwise
          specified in the Ordering Document, (i) a separate Subscription must be purchased for each Application Scan
          Unit that will be scanned, analyzed or otherwise evaluated by the Product; (ii) each Application ID can be
          used to scan one Application Scan Unit and cannot be used to scan, analyze or otherwise evaluate more than one
          Application Scan Unit; and (iii) once an Application ID is assigned to an Application Scan Unit, it may not be
          reassigned to scan a different Application Scan Unit. The right to use any Application Scan Unit that is
          purchased by Company but not used during the applicable Subscription Term will terminate upon expiration of
          the Subscription Term without refund or set-off and may not be used by Company during any Renewal Term.
        </p>
        <p>
          <strong>e. Restrictions.</strong> Company shall not (i) permit any third party to access the Products and/or
          Training Materials except as permitted herein or in an Ordering Document, (ii) modify, translate, reverse
          engineer, decompile, disassemble, create derivative works of or copy the Products or otherwise seek to obtain
          or use the source code or non-public APIs of the Product, except to the extent expressly permitted by
          applicable law (and then only upon advance written notice to Sonatype), (iii) remove, alter or obscure any
          proprietary notices, labels or marks on any component or portion of the Products, (iv) use the Products in a
          manner that breaches Section 13(a) below; (v) market, sell, resell, rent, sublicense, distribute or lease the
          Products, (vi) scrape, collect, mirror, or in any manner compile Software Component Identifiers from any
          public repository using the Products for the purpose of creating a copy of that repository (or any portion
          thereof); (vii) interfere with or disrupt the integrity or performance of the Products and/or third-party data
          contained therein, (viii) use the Products for the benefit of any third party including use of the Products to
          operate as a service bureau, ASP, or hosting service, (ix) attempt to gain unauthorized access to the
          Products, or their related systems or networks, (x) circumvent any measures present in the Products that limit
          access to or use or distribution of the Data Feed; (xi) except for use of the Data Feed (or any portion
          thereof) that is included in any Report generated by a Products, copy the Data Feed (or any portion thereof)
          for any use that is outside of the Products; (xii) obtain access to the Data Feed via the use of non-public
          APIs or by replicating calls to the source of the Data Feed, (xiii) access the Products, or permit access to
          the Products, for purposes of monitoring their availability, performance or functionality, or for any other
          benchmarking or competitive purposes, and/or (xiv) access the Products in order to (A) build a competitive
          product or service, or (B) copy any features, functions or graphics of, or data or information in, the
          Products and/or Training Materials.
        </p>
        <p>
          <strong>f. Reports.</strong> If a Product allows Company to generate Reports or to access any Data Feed(s),
          then Company may use and copy such Reports and/or Data Feed solely for its internal business purposes;
          provided that use of such Reports and/or Data Feed(s) is subject to the restrictions set forth in Section 3(e)
          and the disclaimer set forth in Section 8(c).
        </p>
        <p>
          <strong>g. Training Services.</strong> From time to time, Sonatype may perform certain training courses,
          workshops, and other professional services that are related to the Products (collectively, the
          &quot;Services&quot; or &quot;Training Services&quot;) but only to the extent that any such Training Services
          are identified in an Ordering Document. All rights, title and interest in and to the documentation, training
          materials, work product, guides and presentations developed by Sonatype for use during the performance of the
          Training Services (&quot;Training Materials&quot;) shall be retained by Sonatype.
        </p>
        <p>
          <strong>h. Use by Affiliates and Contractors.</strong> Subject to the terms and conditions of this Agreement,
          Company&apos;s Affiliates and Contractors may use the Products licensed to Company hereunder, provided that
          (a) such use is strictly limited to use for the benefit of Company&apos;s internal business purposes; (b)
          Company remains liable for the acts and omissions of, and responsible for compliance with the terms and
          conditions of this Agreement by, each Affiliate and Contractor; and (c) such use by Company, its Affiliates
          and its Contractors, in the aggregate, does not exceed the scope of the license purchased by Company pursuant
          to the applicable Ordering Document.
        </p>
        <h3>4. PRODUCT MAINTENANCE</h3>
        <p>
          Sonatype will provide support and maintenance for the Products (&quot;Product Maintenance&quot;) pursuant to
          the terms of the support policy set forth at{' '}
          <NxTextLink external rel="noreferrer" href="https://links.sonatype.com/terms/support">
            https://links.sonatype.com/terms/support
          </NxTextLink>
          . Company hereby acknowledges and agrees that Sonatype reserves the right to compile, maintain and use
          technical, statistical, metric and performance information regarding Company&apos;s use of the Products (the
          &quot;Usage Information&quot;), and Company understands and acknowledges that the Products may contain a
          feature that sends Usage Information along with other information regarding the operation of the Products on
          Company&apos;s computer systems to Sonatype. For the avoidance of doubt: (i) Usage Information does not
          include any personally identifiable information; (ii) all non-anonymized Usage Information received by
          Sonatype from Company is hereby deemed to be Company&apos;s Confidential Information; and (iii) Sonatype will
          only (A) use the Usage Information to provide Product Maintenance, and (B) use anonymized and aggregated
          extracts from the Usage Information to improve its Product offerings.
        </p>
        <h3>5. FEES AND PAYMENT</h3>
        <p>
          <strong>a. Fees.</strong> Company will pay all fees specified in each Ordering Document, and shall reimburse
          Sonatype, at Sonatype&apos;s actual cost and without mark-up, for Sonatype&apos;s reasonable travel expenses
          that are incurred as a result of Sonatype&apos;s performance of Training Services. Except as otherwise
          specified herein or in an Ordering Document, (i) fees are based on Product Subscriptions purchased and not
          actual usage, and (ii) all fees owed hereunder are non-cancelable, non-refundable, and shall be paid without
          recoupment or set-off.
        </p>
        <p>
          <strong>b. Payment.</strong> Sonatype will submit an invoice for all Product Subscriptions and Training
          Services purchased by Company pursuant to an Ordering Document, and Company shall pay all amounts set forth in
          each invoice no later than thirty (30) days from the date of the invoice.
        </p>
        <p>
          <strong>c. Overdue Charges; Suspension of Service.</strong> If any fees are not received from Company when
          due, then at Sonatype&apos;s discretion, such unpaid fees may accrue interest at the rate of 1.5% of the
          outstanding balance per month, or the maximum rate permitted by law, whichever is lower, from the date such
          payment was due until the date paid. If any amount owing by Company pursuant to this Agreement is thirty (30)
          or more days overdue, Sonatype may, without limiting Sonatype&apos;s other rights and remedies, suspend
          Company&apos;s access to the Products and/or provision of the Services until such amounts are paid in full.
          For the avoidance of doubt, Sonatype will not exercise its rights under this Section 5(c) if the applicable
          charges are under reasonable and good-faith dispute and Company is cooperating diligently to resolve the
          dispute.
        </p>
        <p>
          <strong>d. Taxes.</strong> Unless otherwise stated, Sonatype&apos;s fees do not include any taxes, levies,
          duties or similar governmental assessments of any nature, including value-added, sales, use or withholding
          taxes, assessable by any local, state, provincial, federal or foreign jurisdiction (collectively,
          &quot;Taxes&quot;). Except for Taxes assessable against Sonatype based on Sonatype&apos;s income, Company is
          responsible for paying all Taxes associated with Company&apos;s purchases hereunder. If Sonatype has the legal
          obligation to pay or collect Taxes for which Company is responsible under this paragraph, the appropriate
          amount shall be invoiced to and paid by Company in accordance with Section 4(b) above, unless Company provides
          Sonatype with a valid tax exemption certificate authorized by the appropriate taxing authority.
        </p>
        <p>
          <strong>e. Audit.</strong> Company agrees to maintain complete and accurate records with respect to matters
          necessary to ensure Company&apos;s compliance with this Agreement. Sonatype will have the right, at its own
          expense and upon reasonable prior notice, to inspect and audit Company&apos;s records with respect to matters
          covered by this Agreement (the &quot;Audit&quot;). If such Audit reveals that Company has underpaid Sonatype
          with respect to any amounts due and payable during the period to which the Audit relates, Company shall
          promptly pay such amounts as are necessary to rectify such underpayment, together with interest in accordance
          with Section 5(c). Such inspection and audit rights shall extend throughout the term of this Agreement and for
          a period of one year thereafter.
        </p>
        <h3>6. PROPRIETARY RIGHTS</h3>
        <p>
          <strong>a. Reservation of Rights.</strong> Subject to the limited rights expressly granted hereunder,
          Sonatype, for itself and on behalf of its licensors, reserves all rights in the Products and Training
          Materials that are not expressly granted to Company in this Agreement, and Company acknowledges and agrees
          that Sonatype owns all rights, title and interest in and to the Products and Training Materials. All rights,
          title and interest in and to any and all improvements, modifications, derivative works and innovations of, to
          and/or involving the Products and Training Materials will be retained in full and owned by Sonatype, even if
          such improvements, modifications, derivative works or innovations result from suggestions, enhancement
          requests, recommendations or other feedback provided to Sonatype by or on behalf of Company. Company agrees
          not to challenge, directly or indirectly, Sonatype&apos;s right, title, and interest in and to the Products or
          Training Materials, and further agrees that it will not directly or indirectly, register, apply for
          registration, or attempt to acquire any legal protection for any of the Products and Training Materials.
        </p>
        <p>
          <strong>b. Open Source Software.</strong> The Products may be provided together with, or otherwise contain,
          certain Open Source Software, each licensed to Company under the respective open source license agreement (the
          &quot;Open Source License&quot;). Company hereby acknowledges and agrees to the terms and conditions in each
          such Open Source License. Any fees charged by Sonatype in connection with the Products do not apply to any
          Open Source Software for which fees may not be charged under the applicable Open Source License. In the event
          of a conflict between the terms of an applicable Open Source License and the terms of this Agreement, the
          terms of the Open Source License shall control solely with respect to the applicable Open Source Software. If
          the terms of any specific Open Source License entitle Company to the source code of the respective Open Source
          Software (if any), that source code may be available from Sonatype upon request (a nominal fee may be charged
          by Sonatype for processing such request).
        </p>
        <h3>7. CONFIDENTIALITY</h3>
        <p>
          <strong>a. Definition of Confidential Information.</strong> As used herein, &quot;Confidential
          Information&quot; means all confidential information disclosed by a Party (&quot;Disclosing Party&quot;) to
          the other Party (&quot;Receiving Party&quot;), whether orally or in writing, that is designated as
          confidential or that reasonably should be understood to be confidential given the nature of the information
          and the circumstances of disclosure. Confidential Information of each Party shall include the terms and
          conditions of this Agreement and all Ordering Documents, as well as business and marketing plans, research,
          development, services, customers, customer lists, designs, drawings, technology and technical information,
          products, product plans, software, developments, inventions, processes, formulas, finances, and business
          processes of such Party; and Sonatype&apos;s Confidential Information shall include the Products, the Training
          Materials and the Documentation. However, Confidential Information shall not include any information that (i)
          is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party,
          (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party without breach of any
          obligation owed to the Disclosing Party, (iii) is received from a third party without breach of any obligation
          owed to the Disclosing Party, or (iv) was independently developed by the Receiving Party without use of or
          access to the Disclosing Party&apos;s Confidential Information.
        </p>
        <p>
          <strong>b. Protection of Confidential Information.</strong> Except as otherwise permitted in writing by the
          Disclosing Party, (i) the Receiving Party shall use the same degree of care that it uses to protect its own
          confidential information of like kind (but in no event less than reasonable care) not to disclose any
          Confidential Information of the Disclosing Party or use it for any purpose beyond the scope of this Agreement,
          and (ii) the Receiving Party shall limit access to Confidential Information of the Disclosing Party to those
          of its employees, contractors and agents who need such access for purposes consistent with this Agreement, who
          have signed confidentiality agreements with the Receiving Party containing terms that are no less protective
          of the Confidential Information than those herein, and for whom the Receiving Party remains fully liable.
        </p>
        <p>
          <strong>c. Compelled Disclosure.</strong> The Receiving Party may disclose Confidential Information of the
          Disclosing Party if it is compelled by law to do so, provided the Receiving Party gives the Disclosing Party
          prior written notice of such compelled disclosure (to the extent not legally prohibited) and reasonable
          assistance, at the Disclosing Party&apos;s cost, if the Disclosing Party wishes to contest the disclosure.
        </p>
        <p>
          <strong>d. Injunctive Relief.</strong> Each Party acknowledges that the extent of damages in the event of any
          threatened or actual breach of this Section 7 would be difficult or impossible to ascertain and that there
          would be available no adequate remedy at law in the event of any such breach. Each Party therefore agrees
          that, in the event it breaches this Section 7, the other Party will be entitled to specific performance and
          injunctive or other equitable relief, in addition to any other relief to which it may be entitled at law or in
          equity. Any such relief shall be in addition to and not in lieu of any relief in the form of monetary damages.
        </p>
        <h3>8. WARRANTIES AND DISCLAIMERS</h3>
        <p>
          <strong>a. Sonatype&apos;s Warranties.</strong> Sonatype warrants that: (i) all Services will be performed by
          Sonatype in a professional and workmanlike manner; provided that Company&apos;s exclusive remedy in the event
          of a breach of this warranty will be re-performance of the Services by Sonatype; and (ii) the Products shall
          perform materially in accordance with the Documentation; provided that Sonatype&apos;s sole liability and
          Company&apos;s sole and exclusive remedy for any breach of this warranty shall be, in Sonatype&apos;s sole
          discretion and at no charge to Company, to use commercially reasonable efforts to provide Company with an
          error correction or work-around that corrects the reported non-conformity or, if Sonatype determines such
          remedy to be impracticable, to terminate the Subscription Term and, provided Company complies with its
          post-termination obligations hereunder, refund to Company a pro-rata portion of the Subscription fees paid by
          Company to Sonatype for the applicable Products equal to the unused portion of the Subscription Term; provided
          further that the limited warranty set forth in this Section 7(a)(ii) will not apply: (A) if the Product is
          used with hardware or software not specified in the Documentation, or (B) if the error was caused by misuse,
          unauthorized modifications or third-party hardware, software or services.
        </p>
        <p>
          <strong>b. Mutual Warranties.</strong> Each Party represents and warrants that (i) it has the full right,
          power and authority to enter into this Agreement and perform its obligations hereunder; (ii) its execution,
          delivery and performance of this Agreement will not conflict with or result in a breach or other violation of
          any agreement or other third party obligation by which it is bound; (iii) when executed and delivered, this
          Agreement will constitute a legal, valid and binding obligation enforceable against it in accordance with its
          terms; and (iv) it will comply with all applicable laws in its performance of this Agreement.
        </p>
        <p>
          <strong>c. General Disclaimers.</strong> EXCEPT AS OTHERWISE PROVIDED IN THIS AGREEMENT, SONATYPE MAKES NO AND
          HEREBY DISCLAIMS, AND COMPANY HEREBY WAIVES, ANY AND ALL, REPRESENTATIONS OR WARRANTIES REGARDING THIS
          AGREEMENT OR THE PRODUCTS, SERVICES, REPORTS AND/OR TRAINING MATERIALS CONTEMPLATED HEREBY, INCLUDING ANY
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND ERROR-FREE OR
          UNINTERRUPTED SERVICE. FURTHERMORE, THE PRODUCTS, SERVICES, REPORTS AND TRAINING MATERIALS MAY BE SUBJECT TO
          LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS, AND
          SONATYPE IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGE RESULTING FROM SUCH PROBLEMS.
          MOREOVER, ALL REPORTS GENERATED BY THE PRODUCTS INCLUDE PUBLICLY AVAILABLE LICENSE AND SECURITY INFORMATION
          RELEVANT TO CERTAIN SOFTWARE COMPONENT IDENTIFIERS AND, ALTHOUGH SONATYPE WILL MAKE COMMERCIALLY REASONABLE
          EFFORTS TO ENSURE THAT SUCH REPORTS ARE CURRENT AND ACCURATE, THERE ARE NATURAL LATENCIES ASSOCIATED WITH
          OBTAINING AND MAKING AVAILABLE INFORMATION AND DATA ASSOCIATED WITH SOFTWARE COMPONENT IDENTIFIERS. AS SUCH,
          COMPANY ACKNOWLEDGES AND AGREES THAT THE INFORMATION AND DATA INCLUDED IN SUCH REPORTS MAY NOT BE ACCURATE OR
          COMPLETE. FURTHERMORE, REFERENCES TO AND ANY CATEGORIZATION OF OPEN SOURCE SOFTWARE LICENSE AGREEMENTS (OR
          TERMS THEREOF) INCLUDED IN A REPORT DO NOT CONSTITUTE LEGAL ADVICE OR GUIDANCE, AND COMPANY ACKNOWLEDGES AND
          AGREES THAT IT IS RESPONSIBLE FOR SEEKING APPROPRIATE LEGAL ADVICE REGARDING COMPANY&apos;S RIGHTS AND
          OBLIGATIONS SET FORTH IN ANY SUCH LICENSE AGREEMENT.
        </p>
        <p>
          <strong>d. Open Source Software Disclaimers.</strong> Company may use the Products to access and use certain
          Open Source Software as artifacts that Company may retrieve from certain Open Source Software code
          repositories or any other public places or sites. Any such Open Source Software is not licensed by or through
          Sonatype, and Company is solely responsible for determining its right to copy, modify or otherwise use such
          Open Source Software and for complying with the terms and conditions of the applicable license that governs
          such Open Source Software. SONATYPE MAKES NO WARRANTIES OR REPRESENTATIONS AND WILL HAVE NO LIABILITY OR
          RESPONSIBILITY REGARDING SUCH OPEN SOURCE SOFTWARE AND/OR COMPANY&apos;S ACCESS TO AND/OR USE THEREOF.
        </p>
        <h3>9. INDEMNIFICATION</h3>
        <p>
          Sonatype shall defend Company against any claim, demand, suit, or proceeding (&quot;Claim&quot;) made or
          brought against Company by a third party alleging that Company&apos;s use of the Products as permitted in
          accordance with this Agreement infringes or misappropriates the intellectual property rights of a third party,
          and shall indemnify Company for any damages finally awarded against, and for reasonable attorney&apos;s fees
          incurred by, Company in connection with any such Claim; provided that Company (a) promptly gives Sonatype
          written notice of the Claim; (b) gives Sonatype sole control of the defense and settlement of the Claim; and
          (c) provides to Sonatype all reasonable assistance, at Sonatype&apos;s expense. Sonatype shall have no
          liability under this Agreement with respect to any Claim based upon: (i) combination or use of the Products
          with equipment, products, systems, software, materials or processes not furnished by Sonatype if, absent such
          combination, no infringement would exist; (ii) use of the Products in a manner inconsistent with the
          Documentation; (iii) use of the Products which use breaches this Agreement; or (iv) use of any version of the
          Products other than the most current version or failure to timely implement any new release, modification,
          update, or replacement of the Products made available to Company by Sonatype. If Company&apos;s use of a
          Product is, or in Sonatype&apos;s opinion is likely to be, enjoined due to a Claim, then Sonatype may: (A)
          procure for Company the right to continue using such Product per the terms of this Agreement; (B) replace or
          modify the applicable Product so that it is non-infringing and substantially equivalent in function to the
          enjoined Product; or (C) terminate Company&apos;s Subscription to access and use the Product and, provided
          Company complies with its post-termination obligations hereunder, refund any unused, prepaid fees covering the
          remainder of the Subscription Term after the effective date of such termination. This Section 9 states
          Sonatype&apos;s sole liability to Company, and Company&apos;s exclusive remedy against Sonatype, for any and
          all Claim(s).
        </p>
        <h3>10. LIMITATION OF LIABILITY</h3>
        <p>
          NEITHER PARTY WILL BE LIABLE (WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR
          OTHER THEORY), TO THE OTHER PARTY OR ANY OTHER PERSON OR ENTITY FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFIT, BUSINESS OR DATA) ARISING
          OUT OF THIS AGREEMENT. EXCEPT FOR AMOUNTS TO BE PAID PURSUANT TO SECTION 9 OR DAMAGES ARISING FROM A BREACH OF
          SECTION 7, THE AGGREGATE LIABILITY OF SONATYPE ARISING OUT OF OR RELATING TO THIS AGREEMENT, WHETHER IN
          CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, WILL NOT EXCEED THE AGGREGATE AMOUNT PAID AND
          PAYABLE BY COMPANY TO SONATYPE DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE ON WHICH A
          CLAIM ARISES.
        </p>
        <h3>11. TERM AND TERMINATION</h3>
        <p>
          <strong>a. Term of Agreement.</strong> This Agreement commences on the Effective Date and shall govern all
          Ordering Documents that are agreed by the Parties until this Agreement is terminated pursuant to this Section
          11.
        </p>
        <p>
          <strong>b. Subscription Term.</strong> Each Subscription purchased by Company commences on the start date
          specified in the applicable Order Form and continues for the Subscription Term specified therein (the
          &quot;Initial Term&quot;). Except as otherwise specified in an Order Form, each Subscription Term shall
          commence upon Delivery. Except as otherwise specified in an Order Form or as terminated pursuant to this
          Agreement or the applicable Order Form, all Subscriptions shall automatically renew for additional periods
          equal to twelve (12) months for the same number of Users or Applications, as applicable, as of the end of the
          prior Subscription (each a &quot;Renewal Term&quot; and, together with the Initial Term, and collectively
          referred to as the &quot;Subscription Term&quot;), unless either Party gives the other written notice of
          non-renewal at least 60 days prior to the end of the Subscription Term. The fees charged by Sonatype to
          Company for any Renewal Term shall be Sonatype&apos;s then-current fees for the Products licensed as part of
          the Subscription.
        </p>
        <p>
          <strong>c. Termination.</strong> A Party may terminate any Ordering Document and/or this Agreement for cause:
          (i) upon 30 days written notice to the other Party of a material breach if such breach remains uncured at the
          expiration of such period, or (ii) if the other Party becomes the subject of a petition in bankruptcy or any
          other proceeding relating to insolvency, receivership, liquidation or assignment for the benefit of creditors.
        </p>
        <p>
          <strong>d. Effect of Termination.</strong> Termination of this Agreement shall not release the Parties from
          any liability that, at the time of termination, has already accrued or that thereafter may accrue with respect
          to any act or omission before termination, or from any obligation that is expressly stated in this Agreement
          to survive termination. Upon any termination of this Agreement, each Party shall (i) immediately discontinue
          all access to and use of the other Party&apos;s Confidential Information, including, for purposes of Company,
          all access to and use of the Products; (ii) delete the other Party&apos;s Confidential Information from its
          computer storage or any other media, including online and off-line libraries; (iii) return to the other Party
          or, at the other Party&apos;s option, destroy, all copies of such other Party&apos;s Confidential Information
          then in its possession; and (iv) promptly pay all amounts due and remaining payable hereunder. Termination of
          this Agreement, regardless of cause or nature, shall be without prejudice to any other rights or remedies of
          the Parties and shall be without liability for any loss or damage occasioned thereby.
        </p>
        <p>
          <strong>e. Surviving Provisions.</strong> Sections 5, 6, 7, 10, 11(d) and (e), 12, and 13(b), (d), (e), (f),
          (h) and (j) shall survive any termination or expiration of this Agreement.
        </p>
        <h3>12. NOTICES, GOVERNING LAW AND JURISDICTION</h3>
        <p>
          <strong>a. Notices.</strong> Notices required or permitted by this Agreement shall be in writing and delivered
          as follows, with notice deemed given as indicated: (a) by personal delivery, when delivered personally; (b) by
          overnight courier, upon written verification of receipt; or (c) by certified or registered mail, return
          receipt requested, upon verification of receipt. Notices shall be sent as follows: (i) by Sonatype to
          Company&apos;s last known address on file with Sonatype; and (ii) by Company to: Sonatype, Inc., 8161 Maple
          Lawn Boulevard, Suite 250, Fulton, MD 20759, Attention: Legal Department. Either Party may designate a
          different address by providing written notice to the other Party.
        </p>
        <p>
          <strong>b. Governing Law; Jurisdiction; Jury Trial.</strong> The validity, construction and performance of
          this Agreement shall be governed by and construed in accordance with the laws of the State of Maryland,
          without regard to any conflicts of laws or choice of law rules, and each Party agrees to submit to the
          exclusive jurisdiction of the State courts located in Howard County, Maryland and Federal courts located in
          the State of Maryland. The Parties expressly disclaim the applicability of, and waive any rights based upon,
          the Uniform Computer Information Transactions Act or the United Nations Convention on Contracts for the
          International Sale of Goods. Each Party hereby waives any right to jury trial in connection with any action or
          litigation in any way arising out of or related to this Agreement.
        </p>
        <h3>13. GENERAL</h3>
        <p>
          <strong>a. Export Compliance.</strong> Each Party shall comply with the export laws and regulations of the
          United States and other applicable jurisdictions when performing its obligations and/or exercising its rights
          hereunder. Without limiting the foregoing, (i) each Party represents that it is not named on any U.S.
          government list of persons or entities prohibited from receiving exports, and (ii) Company shall not permit
          the Products to be accessed or used in violation of any U.S. export embargo, prohibition or restriction.
          Furthermore, Company will not, directly or indirectly, remove or export from the United States or allow the
          export or re-export of any part of the Product and/or Documentation: (a) into (or to a national or resident
          of) any embargoed or terrorist-supporting country; (b) to anyone on the U.S. Commerce Department&apos;s Table
          of Denial Orders or U.S. Treasury Department&apos;s list of Specially Designated Nationals; (c) to any country
          to which such export or re-export is restricted or prohibited, or as to which the United States government or
          any agency thereof requires an export license or other governmental approval at the time of export or
          re-export without first obtaining such license or approval; or (d) otherwise in violation of any export or
          import restrictions, laws or regulations of any United States or foreign agency or authority.
        </p>
        <p>
          <strong>b. Anti-Corruption.</strong> Company hereby agrees that neither it nor any of its Affiliates
          (including all of their respective employees, Contractors, agents and representatives) have received or been
          offered any illegal or improper bribe, kickback, payment, gift, or thing of value from any Sonatype employee
          or agent in connection with this Agreement. Reasonable gifts and entertainment provided in the ordinary course
          of business do not violate the above restriction. If Company learns of any violation of the above restriction,
          Company will use reasonable efforts to promptly notify Sonatype&apos;s Legal Department at legal@sonatype.com.
        </p>
        <p>
          <strong>c. Relationship of the Parties.</strong> The Parties will perform hereunder as independent
          contractors. Nothing contained in this Agreement shall be deemed to create any association, partnership, joint
          venture, or relationship of principal and agent between the Parties.
        </p>
        <p>
          <strong>d. Government End Users.</strong> The Products are commercial computer software that have been
          developed fully at private expense. If Company, a User, or any licensee of the Products is or becomes an
          agency, department, or other entity of the United States Government, the use, duplication, reproduction,
          release, modification, disclosure, or transfer of the Products, or any related Documentation of any kind,
          including technical data and manuals, is restricted by a license agreement or by the terms of this Agreement
          in accordance with Federal Acquisition Regulation 12.212 for civilian purposes and Defense Federal Acquisition
          Regulation Supplement 227.7202 for military purposes. All other use is prohibited.
        </p>
        <p>
          <strong>e. No Third-Party Beneficiaries.</strong> There are no third-party beneficiaries to this Agreement,
          and the Parties acknowledge that this Agreement is intended solely for the benefit of the Parties, their
          successors and permitted assigns, and nothing herein, whether express or implied, shall confer upon any person
          or entity, other than the Parties, their permitted successors and assigns, any legal or equitable right
          whatsoever to enforce any provision of this Agreement .
        </p>
        <p>
          <strong>f. Force Majeure.</strong> Sonatype shall be excused from performance of its obligations under this
          Agreement if such a failure to perform results from compliance with any requirement of applicable law, acts of
          God, fire, strike, embargo, terrorist attack, war, insurrection or riot or other causes beyond the reasonable
          control of Sonatype (each a &quot;Force Majeure Event&quot;). Any delay resulting from any such cause shall
          extend performance accordingly or excuse performance, in whole or in part, as may be reasonable under the
          circumstances.
        </p>
        <p>
          <strong>g. Waiver and Cumulative Remedies; Severability.</strong> No failure or delay by either Party in
          exercising any right under this Agreement shall constitute a waiver of that right. Other than as expressly
          stated herein, the remedies provided herein are in addition to, and not exclusive of, any other remedies of a
          Party at law or in equity. If any provision of this Agreement is held by a court of competent jurisdiction to
          be contrary to law, the provision shall be modified by the court and interpreted so as best to accomplish the
          objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of
          this Agreement shall remain in effect.
        </p>
        <p>
          <strong>h. Assignment.</strong> Neither Party will have the right to assign this Agreement without the written
          consent of the other Party; provided, however, that Sonatype will have the right to assign this Agreement to
          an Affiliate of Sonatype or pursuant to a merger, consolidation, reorganization or sale of all or
          substantially all of the assets of the business to which this Agreement relates. Any assignment in violation
          of the foregoing provision shall be void and of no effect. Subject to the foregoing, this Agreement shall bind
          and inure to the benefit of the Parties, their respective successors and permitted assigns.
        </p>
        <p>
          <strong>i. Headings; Contract Interpretation.</strong> The captions to the Sections of this Agreement are not
          a part of this Agreement but are merely guides or labels to assist in locating and reading the Sections
          hereof. The terms &quot;this Agreement,&quot; &quot;herein,&quot; &quot;hereof,&quot; &quot;hereunder&quot;
          and similar expressions refer to this Agreement and not to any particular section or other portion hereof.
          Except as expressly provided otherwise, references herein to &quot;days&quot; are to calendar days. Any use of
          the term &quot;including&quot; in this Agreement shall be construed as if followed by the phrase &quot;without
          limitation.&quot;
        </p>
        <p>
          <strong>j. Entire Agreement; Counterparts.</strong> This Agreement constitutes the entire agreement between
          the Parties and supersedes all prior and contemporaneous agreements, proposals or representations, written or
          oral, concerning its subject matter. No modification, amendment, or waiver of any provision of this Agreement
          shall be effective unless in writing and signed by an authorized representative of each Party; provided that
          Sonatype reserves the right to modify the terms and conditions of this Agreement or its policies relating to
          the Products at any time. Company is responsible for regularly reviewing this Agreement, and continued use of
          the Products after any such changes shall constitute Company&apos;s consent to such changes. Notwithstanding
          any language to the contrary therein, no terms or conditions stated in Company&apos;s purchase order or other
          order documentation shall be incorporated into or form any part of this Agreement, and all such terms or
          conditions shall be null and void.
        </p>
      </div>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton onClick={closeModal}>I Decline</NxButton>
          <NxButton onClick={updateLicense} variant="primary">
            I Accept
          </NxButton>
        </div>
      </footer>
    </NxModal>
  );
}

EulaModal.propTypes = {
  closeModal: PropTypes.func,
  updateLicense: PropTypes.func.isRequired,
};

export default React.memo(EulaModal);
