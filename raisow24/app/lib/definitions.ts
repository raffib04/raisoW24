//File to store all the types and interfaces used in the app

//User type to represent the user object in the database, and the user object in the app
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    planType: "free" | "basic" | "premium";
    listings: Listing[];
    createdAt: Date;
    updatedAt: Date;
};

//Product type to represent different products in the app
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
};

//Form fields for the login and registration forms
type LoginFormFields = {
    email: string;
    password: string;
};

type RegistrationFormFields = {
    name: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

//User settings to represent the user's settings and preferences as gathered from the settings form and or settings page
type UserSettings = {
    siteTheme: "light" | "dark";
    currency: "usd" | "eur" | "gbp";
    language: "en";
};

// Auth state to represent the state of the user's authentication
type UserAuthState = {
    isLoggedIn: boolean;
    token?: string;
    user: User | null;
};

///Api response types

type AppError = {
    code: number;
    message: string;
};

type ApiResponse<T> = {
    status: "success" | "error";
    data?: T;
    message?: string;
};

type UserResponse = ApiResponse<User>;

//User generated listings

type Listing = {
    id: string; //unique id for the listing
    userId: string; //id of the user who created the listing
    title: string;
    description: string;
    category: Category;
    price: number;
    images: string[];
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
};

type Category = {
    id: string;
    name: string;
    description?: string;
};

type AIListingRecommendation = {
    id: string;
    listingId: string;
    recommendations: string[];
    createdAt: Date;
};

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string;
};

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    status: "pending" | "paid";
};

export type Revenue = {
    month: string;
    revenue: number;
};

export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
    amount: number;
};

export type InvoicesTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount: number;
    status: "pending" | "paid";
};

export type CustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
};

export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
};

export type CustomerField = {
    id: string;
    name: string;
};

export type InvoiceForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: "pending" | "paid";
};
