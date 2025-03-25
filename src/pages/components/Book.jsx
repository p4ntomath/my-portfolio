import React from 'react';
import HTMLFlipBook from 'react-pageflip';

export function Book() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      padding: '2rem'
    }}>
      <div style={{
        position: 'relative',
        width: 'fit-content',
        height: 'fit-content'
      }}>
        <HTMLFlipBook 
          width={300}
          height={400}
          style={{
            border: '1px solid red' /* Temporary for debugging */
          }}
        >
          <div style={{
            background: 'white',
            padding: '20px',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h2>Front Cover</h2>
          </div>
          <div style={{
            background: 'white',
            padding: '20px',
            height: '100%'
          }}>
            Page 1 Content
          </div>
          <div style={{
            background: 'white',
            padding: '20px',
            height: '100%'
          }}>
            Page 2 Content
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}