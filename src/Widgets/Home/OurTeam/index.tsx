import { useEffect } from 'react';
import Employee from '../../../Shared/Employee';
import style from './style.module.css';
import { getTeam } from '../../../App/services/team.service';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import { Element } from 'react-scroll';

const OurTeam = () => {
  const dispatch: AppDispatch = useDispatch();
  const { team } = useSelector((state: RootState) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);

  return (
    <Element name="team">
      <section className={style.section}>
        <svg
          className={style.elem}
          width="541"
          height="550"
          viewBox="0 0 541 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_178_86)">
            <circle
              cx="343"
              cy="343"
              r="343"
              transform="matrix(-1 0 0 1 686 -151)"
              fill="#F14F4F"
            />
          </g>
          <g clipPath="url(#clip1_178_86)">
            <circle
              cx="439"
              cy="-14"
              r="321.5"
              transform="rotate(90 439 -14)"
              stroke="white"
              strokeOpacity="0.5"
            />
            <circle
              cx="574.5"
              cy="401.5"
              r="148"
              transform="rotate(90 574.5 401.5)"
              stroke="white"
              strokeOpacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_178_86">
              <rect width="541" height="535" fill="white" />
            </clipPath>
            <clipPath id="clip1_178_86">
              <rect width="550" height="424" fill="white" transform="translate(541) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
        <div className={style.container}>
          <div className={style.wrapper}>
            <h5 className={style.title}>Наша команда</h5>
            <div className={style.team}>
              {team?.map((item) => (
                <Employee key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default OurTeam;
