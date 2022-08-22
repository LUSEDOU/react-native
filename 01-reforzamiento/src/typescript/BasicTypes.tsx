import React from 'react'

export const BasicTypes = () => {
  const names: string | number = 'F';
  const isActive:boolean = true;
  const age = 18;

  const powers: string[] = ['SuperVelocity', 'Strength','AquaBreathe']

  return (
    <>
    <h3>Basic Types</h3>
    {names}, {age}, {(isActive) ? 'active' : 'inactive'}
    <br/>
    {powers.join(', ')}
    </>
  )
}
