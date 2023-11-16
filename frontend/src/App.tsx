import React, { useState } from 'react';
import { AppBar, NavItem } from './components/AppBar';
import { useEntities } from './hooks/useEntities';
import { Page } from './components/Page';
import { DataTable } from './components/DataTable';

const NAV_LINKS: NavItem[] = [{ name: 'Assets', path: '/' }];

function App() {
  const [currNavIndex] = useState(0);
  const { data } = useEntities();

  const columns = ['_class', '_id', '_type', 'displayName'];

  return (
    <>
      <AppBar navItems={NAV_LINKS} />
      <Page title={NAV_LINKS[currNavIndex].name}>
        {!!data && <DataTable rows={data.entities} columns={columns} />}
      </Page>
    </>
  );
}

export default App;
