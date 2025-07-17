import GlobalStyles from "./styles/GlobalStyles";
import Row from "./styles/Row";
import Button from "./ui/Button";
import Input from "./styles/Input";
import styled from "styled-components";
import { BrowserRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="login" element={<Login />} />
          <Route path="pageNotFound" element={<PageNotFound />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
