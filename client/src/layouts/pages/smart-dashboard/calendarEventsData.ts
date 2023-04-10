/**
 =========================================================
 * Material Dashboard 2 PRO React TS - v1.0.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import _ from "lodash";

const calendarEventsData = [
    {title: "김미영님(커트)", start: "2023-04-01", end: "2023-04-01", className: "success", id: 'test-id'},
    {title: "이은지님(파마)", start: "2023-04-01", end: "2023-04-01", className: "success",},
    {title: "조우리(상담)", start: "2023-04-03", end: "2023-04-03", className: "info",},
    {title: "김지환(염색)", start: "2023-04-04", end: "2023-04-04", className: "warning",},
    {title: "주성수(스타일링)", start: "2023-04-05", end: "2023-04-05", className: "primary",},
    {title: "최창욱(커트)", start: "2023-04-09", end: "2023-04-11", className: "warning",},
    {title: "구자림(매직)", start: "2023-04-12", end: "2023-04-12", className: "primary",},
    {title: "휴식일", start: "2023-04-21", end: "2023-04-21", className: "error",},
    {title: "최무식(상담)", start: "2023-04-25", end: "2023-04-25", className: "info",},
];

export interface IReservationInfo {
    id: number;
    title: string;
    start: string;
    end: string;
    className: string;
    reservationTime: string;
    type: string;
    name: string;
    feature: string;
    visitTime: number;
}

export const calendarEventsData2: {
    [key: number]: IReservationInfo;
} = {
    1: {id: 1, title: "김미영님(커트)", start: "2023-04-01", end: "2023-04-01", className: "success", reservationTime: '12시 30분', type: '커트', name: '김미영', feature: '끝 부분에 갈라진 부분이 많으심', visitTime: 2},
    2: {id: 2, title: "이은지님(파마)", start: "2023-04-01", end: "2023-04-01", className: "success", reservationTime: '14시 00분', type: '파마', name: '이은지', feature: '쎈 컬을 원하심', visitTime: 6},
    3: {id: 3, title: "조우리님(상담)", start: "2023-04-03", end: "2023-04-03", className: "info", reservationTime: '10시 00분', type: '상담', name: '조우리', feature: '', visitTime: 5},
    4: {id: 4, title: "김지환님(염색)", start: "2023-04-04", end: "2023-04-04", className: "warning", reservationTime: '17시 00분', type: '염색', name: '김지환', feature: '파스텔 톤을 원하심', visitTime: 3},
    5: {id: 5, title: "주성수님(스타일링)", start: "2023-04-05", end: "2023-04-05", className: "primary", reservationTime: '13시 30분', type: '스타일링', name: '주성수', feature: '', visitTime: 0},
    6: {id: 6, title: "최창욱님(커트)", start: "2023-04-09", end: "2023-04-11", className: "warning", reservationTime: '11시 30분', type: '커트 + 다운펌', name: '최창욱', feature: '', visitTime: 0},
    7: {id: 7, title: "구자림님(매직)", start: "2023-04-12", end: "2023-04-12", className: "primary", reservationTime: '16시 00분', type: '매직', name: '구자림', feature: '', visitTime: 0},
    9: {id: 9, title: "최무식님(상담)", start: "2023-04-25", end: "2023-04-25", className: "info", reservationTime: '14시 30분', type: '상담', name: '최무식', feature: '', visitTime: 0},
    8: {id: 8, title: "휴식일", start: "2023-04-21", end: "2023-04-21", className: "error", reservationTime: '11시 30분', type: '휴무', name: '', feature: '', visitTime: 0},
};

export const calendarEventsDataForFullCalendar = _.values(calendarEventsData2);

console.log(_.values(calendarEventsData2));

export default calendarEventsData;
