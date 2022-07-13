import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './style.css';

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();


  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);



  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">
        Vendas
      </h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => { setMinDate(date)}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => {setMaxDate(date)}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show756">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="show992">#256</td>
              <td className="show756">24/08/2022</td>
              <td>Weslley Oliveira</td>
              <td className="show992">55</td>
              <td className="show992">50</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#100</td>
              <td className="show756">28/04/2022</td>
              <td>Camile Melo</td>
              <td className="show992">49</td>
              <td className="show992">45</td>
              <td>R$ 52300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#132</td>
              <td className="show756">04/07/2022</td>
              <td>Henrique Alves</td>
              <td className="show992">45</td>
              <td className="show992">40</td>
              <td>R$ 40300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#846</td>
              <td className="show756">27/11/2022</td>
              <td>Wendell Oliveira</td>
              <td className="show992">40</td>
              <td className="show992">35</td>
              <td>R$ 35300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#510</td>
              <td className="show756">17/07/2022</td>
              <td>Riquelmi Oliveira</td>
              <td className="show992">35</td>
              <td className="show992">30</td>
              <td>R$ 30300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#489</td>
              <td className="show756">17/09/2022</td>
              <td>Aleykson Micael</td>
              <td className="show992">13</td>
              <td className="show992">10</td>
              <td>R$ 10300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard;