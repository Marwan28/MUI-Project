# Course Registration App

A simple React application built for the ITI Material UI task.  
The project is a small course registration dashboard that demonstrates many Material UI components in real pages instead of isolated examples.

## Project Idea

The app helps a student browse ITI courses, register for a course, view profile progress, and update learning settings.

## Pages

- **Home**: overview cards, upcoming sessions table, students avatars, and projects gallery.
- **Courses**: course filters, course cards, ratings, menus, and expandable details.
- **Register**: registration form with inputs, course selection, attendance options, rating, slider, dialog, and snackbar.
- **Profile**: student profile card and course progress list.
- **Settings**: account and preference settings using tabs.

## Screenshots



### Home

![Home page](screenshots/home.png)

### Courses

![Courses page](screenshots/courses.png)

### Register

![Register page](screenshots/register.png)

### Profile

![Profile page](screenshots/profile.png)

### Settings

![Settings page](screenshots/settings.png)

## Material UI Components Used

This task uses a wide range of Material UI components, including:

- AppBar
- Toolbar
- Drawer
- List
- ListItemButton
- IconButton
- Menu
- MenuItem
- Badge
- Tooltip
- Avatar
- AvatarGroup
- Grid
- Box
- Paper
- Stack
- Typography
- Divider
- Chip
- Card
- CardMedia
- CardContent
- CardActions
- Collapse
- Button
- ButtonGroup
- ToggleButtonGroup
- TextField
- Select
- Autocomplete
- Checkbox
- RadioGroup
- Switch
- Rating
- Slider
- Accordion
- Table
- ImageList
- Dialog
- Snackbar
- Alert
- Tabs
- LinearProgress

## Customization

The project includes both required customization parts:

- **Customized Button**: `src/day2/components/CustomButton.jsx`
- **Customized Component** using `styled`: `src/day2/components/StatCard.jsx`

The app also uses a custom Material UI theme with light/dark mode support.

## Project Structure

```text
src/
  day2/
    components/
      CourseCard.jsx
      CustomButton.jsx
      Navbar.jsx
      Sidebar.jsx
      StatCard.jsx
    pages/
      Courses.jsx
      Home.jsx
      Profile.jsx
      Register.jsx
      Settings.jsx
    data.js
    Day2Project.jsx
```

## How to Run

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

## Notes

- The project was built with React, Vite, and Material UI.
- Navigation is handled with React state, without using React Router.
- All pages are responsive and work on desktop and mobile screens.
