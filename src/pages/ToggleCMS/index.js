import React from 'react';
import { useCMS } from 'tinacms';

export default function ToggleCMS() {
  function EditButton() {
    const cms = useCMS();
    return (
      <button onClick={() => cms.toggle()}>
        {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
      </button>
    );
  }

  return (
    <div className="toggle-cms">
      <h1>Toggle CMS</h1>
      <EditButton />
    </div>
  )
}
