import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Home = React.lazy(() => import("./components/Home"));

const AdvancedSearch = React.lazy(() => import("./components/AdvancedSearch"));

const SearchResults = React.lazy(() => import("./components/SearchResults"));

const ViewContacts = React.lazy(() => import("./components/ViewContacts"));

const AddNewContact = React.lazy(() => import("./components/AddNewContact"));

const UpdateContactInfo = React.lazy(() =>
  import("./components/UpdateContactInfo")
);

const CreateANewCase = React.lazy(() => import("./components/CreateANewCase"));

const CreateTestCase = React.lazy(() => import("./components/CreateTestCase"));

const ViewInvoices = React.lazy(() => import("./components/ViewInvoices"));

const ViewSalesOrders = React.lazy(() =>
  import("./components/ViewSalesOrders")
);

const ViewWorkOrders = React.lazy(() => import("./components/ViewWorkOrders"));

const IndividualCase = React.lazy(() => import("./components/IndividualCase"));

const IndividualInvoice = React.lazy(() =>
  import("./components/IndividualInvoice")
);

const IndividualSalesOrder = React.lazy(() =>
  import("./components/IndividualSalesOrder")
);

const IndividualWorkOrder = React.lazy(() =>
  import("./components/IndividualWorkOrder")
);

const IndividualContact = React.lazy(() =>
  import("./components/IndividualContact")
);

const Nvd3Chart = React.lazy(() =>
  import("./components/Charts/Nvd3Chart/index")
);

const OtherDocs = React.lazy(() => import("./components/Other/Docs"));

const routes = [
  {
    path: "/Home",
    exact: true,
    name: "Home",
    component: Home
  },
  {
    path: "/AdvancedSearch",
    exact: true,
    name: "Advanced Search",
    component: AdvancedSearch
  },
  {
    path: "/SearchResults",
    exact: true,
    name: "Search Results",
    component: SearchResults
  },
  {
    path: "/ViewContacts",
    exact: true,
    name: "View Contacts",
    component: ViewContacts
  },
  {
    path: "/AddNewContact",
    exact: true,
    name: "Add New Contact",
    component: AddNewContact
  },
  {
    path: "/UpdateContactInfo",
    exact: true,
    name: "Update Contact Info",
    component: UpdateContactInfo
  },
  {
    path: "/CreateANewCase",
    exact: true,
    name: "Create a New Case",
    component: CreateANewCase
  },
  {
    path: "/CreateTestCase",
    exact: true,
    name: "Create a Test Case",
    component: CreateTestCase
  },
  {
    path: "/ViewInvoices",
    exact: true,
    name: "View Invoices",
    component: ViewInvoices
  },
  {
    path: "/ViewSalesOrders",
    exact: true,
    name: "View Sales Orders",
    component: ViewSalesOrders
  },
  {
    path: "/ViewWorkOrders",
    exact: true,
    name: "View Work Orders",
    component: ViewWorkOrders
  },
  {
    path: "/IndividualCase",
    exact: true,
    name: "Individual Case",
    component: IndividualCase
  },
  {
    path: "/IndividualInvoice",
    exact: true,
    name: "Individual Invoice",
    component: IndividualInvoice
  },
  {
    path: "/IndividualSalesOrder",
    exact: true,
    name: "Individual Sales Order",
    component: IndividualSalesOrder
  },
  {
    path: "/IndividualWorkOrder",
    exact: true,
    name: "Individual Work Order",
    component: IndividualWorkOrder
  },
  {
    path: "/IndividualContact",
    exact: true,
    name: "Individual Contact",
    component: IndividualContact
  },
  {
    path: "/charts/nvd3",
    exact: true,
    name: "Nvd3 Chart",
    component: Nvd3Chart
  },
  { path: "/docs", exact: true, name: "Documentation", component: OtherDocs }
];

export default routes;
