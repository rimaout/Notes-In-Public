import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title    
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <img src="/static/icon.png" alt="icon" class="icon" />   // added (icon + use you file path here)
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 2.2rem;         //modified (increased font)
  margin: 0;
  display: flex;             //added
  align-items: center;       //added
  justify-content: center;   //added
}

.page-title .icon {          //added 
  margin-right: 0.5rem;      //added (right padding) 
  width: 60px;               //added (icon size - change to fit your needs)
  height: 60px;              //added (icon size - change to fit your needs)
}                            //added
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
