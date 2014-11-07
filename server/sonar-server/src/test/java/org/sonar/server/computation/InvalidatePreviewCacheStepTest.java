/*
 * SonarQube, open source software quality management tool.
 * Copyright (C) 2008-2014 SonarSource
 * mailto:contact AT sonarsource DOT com
 *
 * SonarQube is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * SonarQube is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

package org.sonar.server.computation;

import org.junit.Before;
import org.junit.Test;
import org.sonar.core.component.ComponentDto;
import org.sonar.core.computation.db.AnalysisReportDto;
import org.sonar.core.persistence.DbSession;
import org.sonar.core.properties.PropertiesDao;
import org.sonar.core.properties.PropertyDto;

import static org.mockito.Matchers.any;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class InvalidatePreviewCacheStepTest {
  private InvalidatePreviewCacheStep sut;
  private PropertiesDao propertiesDao;

  @Before
  public void before() {
    this.propertiesDao = mock(PropertiesDao.class);
    this.sut = new InvalidatePreviewCacheStep(propertiesDao);
  }

  @Test
  public void update_property_calling_propertiesDao() {
    DbSession session = mock(DbSession.class);
    sut.execute(session, mock(AnalysisReportDto.class), mock(ComponentDto.class));

    verify(propertiesDao).setProperty(any(PropertyDto.class), eq(session));
  }
}
