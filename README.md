# **DevFinder**

A **responsive web app** to **search, filter, and explore developers** for your next project.  
Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
Includes **infinite scrolling**, **dynamic filters**, **bookmarks**, and a **modal invite feature**.

---

## **Features**

- Browse a **list of developers** with **infinite scrolling**.
- **Filter developers** by:
  - **Last Name** (partial, lexicographic match)
  - **Preferred Programming Language** (**JavaScript**, **Python**, **Golang**)
- View developer details in a **card**:
  - **First Name & Last Name**
  - **Email**
  - **Preferred Language**
- **Bookmark filtered pages** via URL.
- **Invite developers** via modal confirmation.
- Fully **responsive** for **mobile and desktop**.

---

## **Technologies**

- **Next.js** – React framework for server-side rendering & routing.
- **TypeScript** – Type-safe development.
- **Tailwind CSS** – Utility-first styling.
- **React Context** – State management for developers, filters, and modal.

---

## **Getting Started**

###  Clone the repository
```bash
git clone https://github.com/panoschnar/dev-finder.git
cd dev-finder

2. Install dependencies
npm install
# or
yarn install

3. Run the development server
npm run dev
# or
yarn dev




## **Usage**

Filter developers using the input and language dropdown.

Scroll down to automatically load more developers.

Click “Invite” on a developer card to open the confirmation modal.

Bookmark the page to save current filters in the URL.

## ** Notes**

Mock data is used to simulate a remote API with pagination.

Infinite scroll is implemented using the Intersection Observer API.

All state is managed via React Context for easy access across components.

Tailwind classes are used for responsive and modern UI styling.

Screenshots

public\Screenshot_1.jpg
public\Screenshot_2.jpg
public\Screenshot_3.jpg