# Assignment 1 : Website Review


## Overall Analysis:

[Bass Coast](https://basscoast.ca/) is geared toward establishing itself as an artistically driven music festival. The website aims to garner enough interest in the event to compel purchase of tickets to the experience, or at the very least, apply to contribute. This is acheived through touting an environment that promises to foster:  
- Artistic/individual expression
- Inclusivity
- Cultural and Environmental respect
- Sustainability
- Musical curation
 

The website itself is visually welcoming, though the landing page is questionable. It's true that the interactive logo is a good way of demonstrating the creative nature of the event. However, requiring an extra action to reach homepage requires attention. At a glance, someone could probably discern that this is an musical event, based on the prominence of the **Buy Tickets** and **2020 Lineup**. However the initial impression also suffers from the "Illusion of Completeness" as it has more content below the fold. The user can be distracted from the post fold content, by the arrow buttons on the sides. **Note:** This is better on mobile, as there are not arrow tabs, and some of the post fold content is visible, making the scroll implicit.  

The **Menu** by default on any viewport size is a collapsible one, which works great for mobile. Yet obscures informative links that people have come to expect through convention, or mental models. Even a few extra descriptively titled links might be able to help keep the user interested enough to advance.

A quick few things that stood out from the initial page-load:
- **Explore THE 2020 Theme** leads to a page with a poster-style `<img>` with some text on it. The text is not an element that a screen reader could interpret.
- Menu items are not always well catergorized or logically grouped.
- There is no invasive prompt to download their app, the option simply exists in the borders of their expanded menu.
- Performance can be a bit bogged down by the visual effects, increasing page load times.


## User Experience

### **Good**

- Large and actionable buttons create an adequate visual hierarchy on the page, with effective use of an accenting colour.
- Good use of *"whitespace"* to pare down visual distractions.
- The logo/home link does not lead you back to the landing page, and is a wise decision, because it's not something a user really needs to see more than once.

### **Bad**

- On desktop, tab arrows positioned on the left and right sides of the viewport are prominent calls to action. Cycling through what are essentially **three** hero images with no information.
    - One of the three image/pages does feature some text reading, *"BASS COAST THOUGHTFULLY CURATED BOUTIQUE AND ART FESTIVAL"*, before a `<script>` jumbles any of the text a reader might have been able to interpret.
- The navigation headings could use some work, for example: the **FAQ** heading doesn't really convey a lot of meaning.
- Site mechanics are inconsistent at times, which keeps the user guessing about how it functions.
  - Multi-staged educational pages with **NEXT>>** arrows at the bottom, but then lacking the same arrows on similar pages.
  - eg) [Harm Reduction](https://basscoast.ca/pages/harm-reduction-education-series) vs. [Sustainability](https://basscoast.ca/pages/sustainability-education-series)


## Accessibility

### **Good**

- The site mostly utilizes proper contrast ratio to assist with visual impairments.
- They do try to make some use of **ARIA (tabs, labels, hidden=true)** in order to streamline navigation for those with readers.
- It seems that effort was placed on the use of semantic tags to describe what content is there.

### **Bad**

- Website tested at **66%** accessibility through the developer tools.
- Navigation drawer uses empty `<a href="#">` for the headings of the sections within, which be an obstacle for those using readers, or tabbing to navigate
- The site sections that feature galleries of images don't actually include any alt attribute with the photos, or if it's included it is *"undefined"*
- [GET TO KNOW THE ARTISTS](https://basscoast.ca/blogs/get-to-know) leads to page with some working information. However there are three navigation links, **FESTIVAL/MUSIC/ART/**, that actually lead to completely empty pages.
## Mobile

### **Good**

- The mobile version of the website has a responsive enough layout in terms of elements scaling down and accomodating good flow
- Collapsible nav drawer is further simplified under the headings, which can be expanded. This is important because it doesn't overload the user with a plethora of immediate information, and makes things easier to navigate.

### **Bad**

- Having a single link to **Tickets** under the **Buy Now** in the menu seems like a wasted action
- "Burger" menu has a couple nested **FAQ** dropdowns, with the last dropdown being accessed by interaction with the **+** symbol located to the right of the list links. When fully expanded the user will see something like:
    >FAQ  
    >>FAQ                   
    >>>FAQ  
    >>>Blog  
    >>>First Timer's Guide  
    >>>Merritt  
    >>>Now Hiring  
- The is an animated bouncing scroll button on the main page, inviting an action which is meant to move the user down the page. When touched, the button is highlighted in a soft blue outline, though it does not actually perform any function. For such a powerful CTA to have no function is a waste of user time.
  - Also in mobile landscape, the bouncing button moves behind the **Explore 2020 Theme** button. 

## Website Content

### **Good**

- The homepage meets the user with a fairly minimalistic layout.
- The site includes a lot of information and affiliation regarding their beliefs, policies.

### **Bad**

- The menu should include their YouTube social media link at the bottom, next to their Vimeo. Also, they should stop using Vimeo.
- The site does not need an entire gallery beneath the main or index page content there exists a separate gallery page.
