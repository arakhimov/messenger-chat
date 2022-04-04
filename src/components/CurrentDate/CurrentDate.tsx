import React from 'react';

const regExpDate = /.*([A-Z][a-z]{2})\s(\d{2})\s(\d{4}).*/;

type CurrentDateProps = {
  date: number,
  currentDate: number
}

export const CurrentDate: React.FC<CurrentDateProps> = ({ date, currentDate }) => (date === currentDate ? null :
  <p className="chat-screen__date">{`${new Date(date)}`.replace(regExpDate, '$2 $1 $3')}</p>);