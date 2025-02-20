/*
 * SonarQube
 * Copyright (C) 2009-2021 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { translate } from 'sonar-ui-common/helpers/l10n';
import CodeSnippet from '../../../common/CodeSnippet';
import InstanceMessage from '../../../common/InstanceMessage';

export interface JavaMavenProps {
  host: string;
  projectKey: string;
  token: string;
}

export default function JavaMaven(props: JavaMavenProps) {
  const { host, projectKey, token } = props;
  const command = [
    'mvn sonar:sonar',
    `-Dsonar.projectKey=${projectKey}`,
    `-Dsonar.host.url=${host}`,
    `-Dsonar.login=${token}`
  ];

  return (
    <div>
      <h4 className="spacer-bottom">{translate('onboarding.analysis.java.maven.header')}</h4>
      <p className="spacer-bottom markdown">
        <InstanceMessage message={translate('onboarding.analysis.java.maven.text')} />
      </p>
      <CodeSnippet snippet={command} />
      <p className="big-spacer-top markdown">
        <FormattedMessage
          defaultMessage={translate('onboarding.analysis.docs')}
          id="onboarding.analysis.docs"
          values={{
            link: (
              <Link to="/documentation/analysis/scan/sonarscanner-for-maven/" target="_blank">
                {translate('onboarding.analysis.java.maven.docs_link')}
              </Link>
            )
          }}
        />
      </p>
      <p className="big-spacer-top markdown">
        {translate('onboarding.analysis.auto_refresh_after_analysis')}
      </p>
    </div>
  );
}
