# 🔋 Battery Performance Dashboard

This project is a React-based Vite front-end application designed to visualize and analyze battery performance data. It features a dynamic dashboard displaying key battery metrics, including State of Health (SOH), cycle count, temperature, and discharge. Batteries can be filtered and ranked based on custom "Durability," "Resilience," and "Balanced" scores.

## ✨ Features

- **Interactive Dashboard:** View a list of battery performance cards.

- **Filter & Sort:** Sort batteries by Durability, Resilience, or Balanced scores using toggle buttons.

  - **Durability:** Ranks batteries by their long-term performance and capacity retention over many cycles.

  - **Resilience:** Ranks batteries by their ability to withstand and perform under stressful conditions.

  - **Balanced:** Ranks batteries by an overall score, combining durability and resilience for comprehensive performance.

- **Global Ranking:** Each battery's Durability, Resilience, and Balanced scores are ranked (1st, 2nd, 3rd, etc.) relative to all other batteries in the dataset for that specific metric.

- **Detailed Battery Cards:** Each card provides a summary of:

  - Battery Identifier

  - State of Health (SOH) with a dynamic particle progress bar

  - Voltage Type, C-Rate, and Stress Test details

  - Operational metrics like Cycles, Average Temperature, and Average Discharge

  - Performance Analysis section with Durability, Resilience, and Balanced scores, including their global ranks.

- **Responsive Design:** Optimized for various screen sizes.

- **Loading & Error States:** Clear indicators for data loading and potential API errors.

## 🛠️ Technologies Used

- **React:** A JavaScript library for building user interfaces.

- **Vite:** A fast build tool that provides a lightning-fast development experience for modern web projects.

- **Material-UI (MUI):** A popular React UI framework for beautiful and responsive components.

- **JavaScript (ES6+)**

- **CSS-in-JS (MUI's `sx` prop & `keyframes`):** For styling and animations.

## 🚀 Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js (LTS version recommended)

- npm (comes with Node.js) or Yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/TruLie13/FE-UL-Battery-Project-.git](https://github.com/TruLie13/FE-UL-Battery-Project-.git)

    ```

2.  **Navigate into the project directory:**

    ```bash
    cd FE-UL-Battery-Project-

    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install

    ```

### Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn run dev

    ```

    This will open the application in your default web browser at `http://localhost:3000`.

## 📊 Data Source

This application fetches battery performance data from a dedicated <a href="https://github.com/TruLie13/BE-UL-Battery-Project" target="_blank" rel="noopener noreferrer">backend API</a>.

The underlying data is open-source and provided by **UL Research Institutes**.

- **Original Data Source:** <a href="https://ul.org/institutes-offices/electrochemical-safety/open-science-data" target="_blank" rel="noopener noreferrer">UL-FRI Open Science Data</a>
- **Specific Dataset:** Cycle Life Aging Test – Cylindrical Cell – Part 01 (<a href="https://doi.org/10.5281/zenodo.7658812" target="_blank" rel="noopener noreferrer">DOI: 10.5281/zenodo.7658812</a>)

Ensure your backend server is running and accessible for the dashboard to display data.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
