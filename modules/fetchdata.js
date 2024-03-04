/**
 * Fetches works from the specified URL.
 * @param {string} url - The URL to fetch the works from.
 * @returns {Array} - An array of works retrieved from the API.
 */
export async function fetchWorks(url) {
  try {
    // Send a GET request to the specified URL
    const response = await fetch(url);

    // Check if the response was successful (HTTP status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the "works" data from the response
    return data.works;
  } catch (error) {
    // Log any errors that occurred during the fetch operation
    console.log(error);

    // Return an empty array in case of an error
    return [];
  }
}
