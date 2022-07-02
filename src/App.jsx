import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

// componente de inicio de mi aplicación
export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
