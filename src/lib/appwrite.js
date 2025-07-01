import { Client, Databases, Functions, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const functions = new Functions(client);

// Database and Collection IDs - you'll need to create these in your Appwrite console
export const DATABASE_ID = '6864054600164bc45748'; // Replace with the ID from console
export const COLLECTION_ID = '6864055d002e561ce093'; // Replace with the ID from console

// Replace with your actual Function ID from Appwrite console (not deployment ID)
export const EMAIL_FUNCTION_ID = '686413590029a1917e5c'; // This should be the Function ID, not deployment ID

export { ID };