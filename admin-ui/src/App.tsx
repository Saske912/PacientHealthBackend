import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PacientList } from "./pacient/PacientList";
import { PacientCreate } from "./pacient/PacientCreate";
import { PacientEdit } from "./pacient/PacientEdit";
import { PacientShow } from "./pacient/PacientShow";
import { DestinationList } from "./destination/DestinationList";
import { DestinationCreate } from "./destination/DestinationCreate";
import { DestinationEdit } from "./destination/DestinationEdit";
import { DestinationShow } from "./destination/DestinationShow";
import { DrugList } from "./drug/DrugList";
import { DrugCreate } from "./drug/DrugCreate";
import { DrugEdit } from "./drug/DrugEdit";
import { DrugShow } from "./drug/DrugShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Pacient"
          list={PacientList}
          edit={PacientEdit}
          create={PacientCreate}
          show={PacientShow}
        />
        <Resource
          name="Destination"
          list={DestinationList}
          edit={DestinationEdit}
          create={DestinationCreate}
          show={DestinationShow}
        />
        <Resource
          name="Drug"
          list={DrugList}
          edit={DrugEdit}
          create={DrugCreate}
          show={DrugShow}
        />
      </Admin>
    </div>
  );
};

export default App;
