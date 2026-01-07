import { Client, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);


export const DATABASE_ID = '6864054600164bc45748'; // Replace with the ID from console
export const COLLECTION_ID = '6864055d002e561ce093'; // Replace with the ID from console

export { ID };