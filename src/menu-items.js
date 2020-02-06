export default {
  items: [
    {
      id: "ui-element",
      title: "UI ELEMENT",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "Home",
          title: "Home",
          type: "item",
          url: "/Home",
          icon: "feather icon-home"
        },
        {
          id: "Contacts",
          title: "Contacts",
          type: "collapse",
          icon: "feather icon-user",
          children: [
            {
              id: "AdvancedSearch",
              title: "Advanced Search",
              type: "item",
              url: "/AdvancedSearch"
            },
            {
              id: "SearchResults",
              title: "Search Results",
              type: "item",
              url: "/SearchResults"
            },
            {
              id: "ViewContacts",
              title: "View Contacts",
              type: "item",
              url: "/ViewContacts"
            },
            {
              id: "IndividualContact",
              title: "Individual Contact",
              type: "item",
              url: "/IndividualContact"
            },
            {
              id: "AddNewContact",
              title: "Add New Contact",
              type: "item",
              url: "/AddNewContact"
            },
            {
              id: "UpdateContactInfo",
              title: "Update Contact Info",
              type: "item",
              url: "/UpdateContactInfo"
            }
          ]
        },
        {
          id: "Cases",
          title: "Cases",
          type: "collapse",
          icon: "feather icon-briefcase",
          children: [
            {
              id: "CreateANewCase",
              title: "Create A New Case",
              type: "item",
              url: "/CreateANewCase"
            },
            {
              id: "CreateTestCase",
              title: "Create a Test Case",
              type: "item",
              url: "/CreateTestCase"
            },
            {
              id: "IndividualCase",
              title: "Individual Case",
              type: "item",
              url: "/IndividualCase"
            }
          ]
        },
        {
          id: "Financials",
          title: "Financials",
          type: "collapse",
          icon: "feather icon-credit-card",
          children: [
            {
              id: "ViewInvoices",
              title: "View Invoices",
              type: "item",
              url: "/ViewInvoices"
            },
            {
              id: "IndividualInvoice",
              title: "Individual Invoice",
              type: "item",
              url: "/IndividualInvoice"
            },
            {
              id: "ViewSalesOrders",
              title: "View Sales Orders",
              type: "item",
              url: "/ViewSalesOrders"
            },
            {
              id: "IndividualSalesOrder",
              title: "Individual Sales Order",
              type: "item",
              url: "/IndividualSalesOrder"
            },
            {
              id: "ViewWorkOrders",
              title: "View Work Orders",
              type: "item",
              url: "/ViewWorkOrders"
            },
            {
              id: "IndividualWorkOrder",
              title: "Individual Work Order",
              type: "item",
              url: "/IndividualWorkOrder"
            }
          ]
        }
      ]
    }
  ]
};
