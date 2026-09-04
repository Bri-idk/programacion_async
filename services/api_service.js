import { API_URL } from "../env.js";

//*GET
export async function getAllApiProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
}

getAllApiProducts();

export const getSingleProduct = async function (id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
};

getSingleProduct(20);
getSingleProduct(1);
getSingleProduct(3);
getSingleProduct(2);
getSingleProduct(10);

//*POST

export const createProduct = async (productObject) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObject),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
};

createProduct({
  title: "papa",
  price: 0.2,
  description: "una papa",
  category: "verdura",
  image: "http://example.com",
});

createProduct({
  title: "segunda papa",
  price: 0.3,
  description: "otra papa",
  category: "verdura",
  image: "http://example.com",
});

//*Delete

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Borrado:", data);
  } catch (error) {
    console.log("Error", error);
  }
};

deleteProduct(1);

//*PUT

export const putObject = async (id, productObject) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObject),
    });
    const data = await response.json();
    console.log("Editado:", data);
  } catch (error) {
    console.log("Error", error);
  }
};

putObject(2, {
  title: "papa",
  price: 0.2,
  description: "una papa",
  category: "verdura",
  image: "http://example.com",
});
