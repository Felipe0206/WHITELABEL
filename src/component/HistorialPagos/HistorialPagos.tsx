"use client"
import React from 'react';
import styles from './HistorialPagos.module.css'; // Importa los estilos CSS

const HistorialPagos: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.paragraph}>Historia de pagos</p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Entrada de Token</th>
              <th>Salida de Token</th>
              <th>Rentas</th>
              <th>Pagos de Comisión</th> {/* Nueva columna */}
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se insertarían las filas de datos */}
            <tr>
              <td>100</td>
              <td>20</td>
              <td>50</td>
              <td>10</td> {/* Nueva celda para Pagos de Comisión */}
              <td>2024-03-01</td>
              <td>Compra</td>
              <td>Compra de tokens</td>
            </tr>
            <tr>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td> {/* Nueva celda para Pagos de Comisión */}
              <td>2024-03-02</td>
              <td>Venta</td>
              <td>Venta de tokens</td>
            </tr>
            {/* Puedes agregar más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialPagos;

