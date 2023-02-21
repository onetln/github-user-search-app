import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { GiMoebiusTriangle } from 'react-icons/gi';

function ThemeChange() {
  const getTheme = JSON.parse(localStorage.getItem('data-theme')) || 'dark';
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <label tabIndex={0} className="btn btn-ghost btn-sm">
        Theme
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div
            onClick={() => setTheme('dark')}
            className={`${
              theme === 'dark' && 'bg-accent hover:bg-accent-focus'
            }`}
          >
            <HiMoon />
            Dark
          </div>
        </li>
        <li>
          <div
            onClick={() => setTheme('cupcake')}
            className={`${
              theme === 'cupcake' && 'bg-accent hover:bg-accent-focus'
            }`}
          >
            <HiSun />
            Ligth
          </div>
        </li>
        <li>
          <div
            onClick={() => setTheme('cyberpunk')}
            className={`${
              theme === 'cyberpunk' && 'bg-accent hover:bg-accent-focus'
            }`}
          >
            <GiMoebiusTriangle className="text-lg text-orange-600" />
            Cyberpunk
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ThemeChange;
