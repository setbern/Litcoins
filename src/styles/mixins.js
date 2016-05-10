export function card(level) {
   switch(level) {
       case 1:
           return '0 1px 4px rgba(49, 53, 66, 0.12), 0 1px 3px rgba(49, 53, 66, 0.24)'
       case 2:
           return '0 3px 6px rgba(49, 53, 66, 0.16), 0 3px 6px rgba(49, 53, 66, 0.23)'
       case 3:
           return '0 10px 20px rgba(49, 53, 66, 0.19), 0 6px 6px rgba(49, 53, 66, 0.23)'
       case 4:
           return '0 14px 28px rgba(49, 53, 66, 0.25), 0 10px 10px rgba(49, 53, 66, 0.22)'
       case 5:
           return '0 19px 38px rgba(49, 53, 66, 0.30), 0 15px 12px rgba(49, 53, 66, 0.22)'
   }
}

export const center = {
   alignItems: 'center',
   justifyContent: 'center'
}

export function flex(direction = 'column' , wrap = 'nowrap') {
   return {
       flex: 0,
       flexDirection: direction,
       flexWrap: wrap
   }
}

export const row = flex('row', 'wrap');
export const column = flex('column', 'nowrap');
export const rowReverse = flex('row-reverse', 'wrap');
export const columnReverse = flex('column-reverse', 'wrap');
export const rowNowrap = flex('row', 'nowrap');