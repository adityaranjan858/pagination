# Pagination 

This project is a simple yet robust pagination component built with **React** and **Vite**. It allows users to navigate through a list of products, with functionalities enhanced using a custom hook. The pagination controls include features such as disabling navigation buttons when the user is on the first or last page.

## Demo Link
[Pagination](pagination-v1.vercel.app)

## Features

- **Dynamic Pagination**: Navigate through a list of products with pagination controls.
- **Custom Hook for Data Fetching**: Utilizes a custom hook for managing and retrieving product data.
- **Disabling Navigation Buttons**: Previous button is disabled on the first page, and the next button is disabled on the last page.
- **Responsive Design**: A user-friendly interface that adapts to different screen sizes.
- **Easy Integration**: Simple to integrate into existing React projects.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web applications.
- **JavaScript ES6/7 Features**: Utilizing modern JavaScript syntax and features.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14 or later)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone "https://github.com/adityaranjan858/pagination.git"
   ```

2. **Navigate into the project directory**:
   ```bash
   cd pagination
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:
```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to view your application.

### Building for Production

To create a production build of your application, run:
```bash
npm run build
```
This will generate a `dist` folder containing your optimized application.

## Using the Pagination Component

To use the pagination component:

1. Import the `Pagination` component into your desired component.
2. Access data through your custom hook.
3. Pass necessary props to the `Pagination` component, including:
    - The current page number.
    - Functions to navigate to the previous and next pages.
    - The total number of pages.

### Example of Integrating Pagination

Here is a basic example of how to use the pagination component within your app:

```javascript
import React, { useState } from 'react';
import useProductData from './hooks/useProductData';
import Pagination from './components/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const products = useProductData();
  const productsPerPage = 10; // Set number of products per page

  // Calculate total pages
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return (
    <div>
      <h1>Product List</h1>
      {products.slice(startIndex, endIndex).map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.images} alt={product.title} />
          <p>{product.price}</p>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
