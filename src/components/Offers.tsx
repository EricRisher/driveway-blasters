import React from 'react';

function Offers() {
  return (
    <div className="offers-container" id="Offers">
      <h3 className="font-bold pt-10">TRANSFORM YOUR PROPERTY</h3>
      <h1 className="font-extrabold w-[90%] text-center">
        Expert Cleaning Services That Deliever Unmatched Results
      </h1>
      <article className="offers-article">
        <div className="offer-card">
          <div className="image-with-badge">
            <img
              src="/icons/best value.png"
              className="best-value-badge arrowBounce"
              width={250}
              height={250}
            ></img>
            <img
              src="/images/house-wash-package.png"
              width={500}
              height={500}
              className="rounded-lg"
            ></img>
          </div>
          <div className="offer-text">
            <h3 className="font-bold">Complete Exterior Package</h3>
            <h2
              className="text-left w-70 font-extrabold"
              style={{ color: '#4a8aea ' }}
            >
              Full House Wash Service <br />
              <span style={{ color: '#102641' }}>Starting at $1995</span>
            </h2>
            <p className="text-left">
              Transform your home's curb appeal with our comprehensive exterior
              cleaning service. Our eco-friendly, proprietary cleaning formula
              safely removes years of dirt, grime, mildew, and stains without
              damaging your surfaces. This all-inclusive service covers exterior
              house washing, pressure washing, window cleaning, roof cleaning,
              solar panel maintenance, and gutter cleaning. Everything your home
              needs to look its absolute best.
            </p>
            <ul className="text-left mt-2">
              <li>
                <b>$1,995</b> for houses below 2,000 sq. ft.
              </li>
              <li>
                <b>$2,495</b> for houses below 3,000 sq. ft.
              </li>
              <li>
                <b>$2,995</b> for houses 3,000+ sq. ft.
              </li>
            </ul>

            <p className="text-left font-semibold" style={{ color: '#4a8aea' }}>
              ✓ Increases home value ✓ Prevents costly repairs ✓ 100%
              satisfaction guaranteed
            </p>
            <a
              href="/contact"
              className="button btn-primary services-btn w-100 mt-4 text-center"
              style={{ maxWidth: '450px', margin: '0 auto' }}
            >
              Book Your House Wash Now!
            </a>
          </div>
        </div>
        <div className="offer-card">
          <img
            src="/images/solar-panels.png"
            width={500}
            height={500}
            className="rounded-lg"
          ></img>
          <div className="offer-text">
            <h3 className="font-bold">Solar Panel Optimization</h3>
            <h2
              className="text-left w-70 font-extrabold"
              style={{ color: '#4a8aea ' }}
            >
              Solar Panel Cleaning Service <br />{' '}
              <span style={{ color: '#102641' }}>Starting at $245</span>
            </h2>
            <p className="text-left">
              Maximize your solar investment and energy savings with our
              specialized cleaning service. Dirty panels can reduce efficiency
              by up to 25%. Our certified technicians use professional-grade
              nylon brushes and purified water (RODI system) to restore peak
              performance without scratching or damaging your panels.
            </p>

            <ul className="text-left mt-2">
              <li>
                <b>$245</b> for up to 10 panels
              </li>
              <li>
                <b>$395</b> for 11-20 panels
              </li>
              <li>
                <b>$495</b> for 21-30 panels
              </li>
            </ul>

            <p>
              {' '}
              Fast 2-hour service completed in one day. Schedule in advance to
              guarantee your preferred time slot.
            </p>

            <p className="text-left font-semibold" style={{ color: '#4a8aea' }}>
              ✓ Increases energy output ✓ Reduces electric bills ✓ Extends panel
              life
            </p>

            <a
              href="/contact"
              className="button btn-primary services-btn w-100 mt-4 text-center"
              style={{ maxWidth: '500px', margin: '0 auto' }}
            >
              Boost Your Solar Efficiency Now!
            </a>
          </div>
        </div>
        <div className="offer-card">
          <img
            src="/images/pressure-washing.png"
            width={500}
            height={500}
            className="rounded-lg"
          ></img>
          <div className="offer-text">
            <h3 className="font-bold">Surface Restoration</h3>
            <h2
              className="text-left w-70 font-extrabold"
              style={{ color: '#4a8aea ' }}
            >
              Pressure Washing & Surface Cleaning <br />{' '}
              <span style={{ color: '#102641' }}>
                Starting at 53¢ per sq. ft.
              </span>
            </h2>
            <p className="text-left">
              Restore your outdoor surfaces to like-new condition with our
              professional pressure washing service. We start with a
              complimentary inspection to assess your specific needs, then
              expertly remove oil stains, rust, mold, mildew, gum, and other
              stubborn contaminants from driveways, patios, walkways, and decks.
            </p>
            <ul className="text-left mt-2">
              <li>
                <b>Starting at $199</b> minimum for patios, decks, driveways
              </li>
              <li>
                <b>53¢ per sq. ft.</b> for standard concrete cleaning
              </li>
              <li className="mt-2">
                • Additional charges apply for heavy staining (oil, rust,
                calcium deposits)
              </li>
            </ul>
            <p className="text-left font-semibold" style={{ color: '#4a8aea' }}>
              ✓ Free inspection included ✓ Removes toughest stains ✓ Prevents
              slip hazards
            </p>
            <a
              href="/contact"
              className="button btn-primary services-btn w-100 mt-4 text-center"
              style={{ maxWidth: '500px', margin: '0 auto' }}
            >
              Schedule Your Free Inspection!
            </a>
          </div>
        </div>
        <div className="offer-card">
          <img
            src="/images/gutter-roof-package.png"
            width={500}
            height={500}
            className="rounded-lg"
          ></img>
          <div className="offer-text">
            <h3 className="font-bold ">Property Protection Package</h3>
            <h2
              className="text-left w-70 font-extrabold"
              style={{ color: '#4a8aea ' }}
            >
              Gutter & Roof Cleaning Combo
              <br />{' '}
              <span style={{ color: '#102641' }}>
                Starting at 43¢ per sq. ft.
              </span>
            </h2>
            <p className="text-left">
              Protect your home from water damage and costly repairs with our
              comprehensive gutter and roof cleaning service. We start with a
              complimentary inspection to assess your specific needs, then
              expertly remove leaves, debris, moss, algae, and stains that can
              clog gutters and degrade roofing materials.
            </p>
            <ul className="text-left mt-2">
              <li>
                <b>Starting at $695</b> minimum for gutters and roof cleaning
              </li>
              <li className="mt-2">
                • Additional charges apply for heavy moss/algae buildup, 2-story
                homes, difficult access, and or roofing material
              </li>
            </ul>
            <p className="text-left font-semibold" style={{ color: '#4a8aea' }}>
              ✓ Free inspection included ✓ Prevents water damage ✓ Extends roof
              life
            </p>
            <a
              href="/contact"
              className="button btn-primary services-btn w-100 mt-4 text-center"
              style={{ maxWidth: '500px', margin: '0 auto' }}
            >
              Schedule Your Free Inspection!
            </a>
          </div>
        </div>
        <div className="offer-card">
          <img
            src="/images/seasonal-maintenance.png"
            width={500}
            height={500}
            className="rounded-lg"
          ></img>
          <div className="offer-text">
            <h3 className="font-bold">Worry-Free Seasonal Maintenance</h3>
            <h2
              className="text-left w-70 font-extrabold"
              style={{ color: '#4a8aea ' }}
            >
              Annual Property Care Plan <br />
              <span style={{ color: '#102641' }}>Save 20% Year-Round</span>
            </h2>
            <p className="text-left">
              Keep your property pristine year-round with our comprehensive
              maintenance program. We handle everything on a smart schedule that
              prevents problems before they start. No more remembering when to
              book services—we've got you covered with automatic scheduling and
              guaranteed availability.
            </p>

            <ul className="text-left">
              <li>
                <b>Starting at $225/month</b> for complete annual property
                maintenance
              </li>
              <li className="mt-2">
                <b>Every 3 Months:</b> Driveway cleaning + window cleaning
              </li>
              <li>
                <b>Every 6 Months:</b> Deep pressure washing + gutter cleaning
              </li>
              <li>
                <b>Annual Services:</b> Full house wash + professional roof
                cleaning
              </li>
              <li className="mt-1">
                <b>Bonus:</b> Quarterly Emergency touch-ups included at no extra
                charge
              </li>
            </ul>

            <p className="text-left font-semibold" style={{ color: '#4a8aea' }}>
              ✓ Save over $2,000 vs. individual services ✓ Priority scheduling ✓
              Automatic reminders
            </p>
            <a
              href="/contact"
              className="button btn-primary services-btn w-100 mt-4 text-center"
              style={{ maxWidth: '350px', margin: '0 auto' }}
            >
              Lock In Your Savings!
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Offers;
