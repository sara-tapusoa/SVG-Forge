/// <reference types="@figma/plugin-typings" />


import '../dist/styles.css';

const width = 480;
const height = 650;

figma.showUI(__html__, { themeColors: true, width, height });

const icons = {
  frame: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7.66667L6.5 12.3333H3V13.5H6.5V17H7.66667V13.5H12.3333V17H13.5V13.5H17V12.3333H13.5L13.5 7.66667H17V6.5H13.5V3H12.3333V6.5H7.66667V3H6.5V6.5H3V7.66667H6.5ZM7.66667 7.66667L7.66667 12.3333H12.3333L12.3333 7.66667H7.66667Z" fill="#6B6B6B"/></svg>`,
  autoLayout: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2 5.25H3V3.5H14.2V5.25ZM17 10.85H3V9.1H17V10.85ZM11.4 16.45H3V14.7H11.4V16.45Z" fill="#6B6B6B"/></svg>`,
  group: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3V5.09998H4.4V4.39999H5.1V3H3ZM8.6 3V4.39999H11.4V3H8.6ZM14.9 3V4.39999H15.6V5.09998H17V3H14.9ZM17 8.59996H15.6V11.3999H17V8.59996ZM17 14.8999H15.6V15.5999H14.9V16.9999H17V14.8999ZM11.4 16.9999V15.5999H8.6V16.9999H11.4ZM5.1 16.9999V15.5999H4.4V14.8999H3V16.9999H5.1ZM3 11.3999H4.4V8.59996H3V11.3999Z" fill="#6B6B6B"/></svg>`,
  component: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.0001L5.88236 7.11778L8.76472 10.0001L5.88236 12.8825L3 10.0001Z" fill="#6B6B6B"/><path d="M7.11764 14.1179L10 11.2356L12.8824 14.1179L10 17.0003L7.11764 14.1179Z" fill="#6B6B6B"/><path d="M7.11764 5.88236L10 3L12.8824 5.88236L10 8.76472L7.11764 5.88236Z" fill="#6B6B6B"/><path d="M11.2353 10.0001L14.1176 7.11778L17 10.0001L14.1176 12.8825L11.2353 10.0001Z" fill="#6B6B6B"/></svg>`,
  instance: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.75L4.75 10L10 15.25L15.25 10L10 4.75ZM3 10L10 17L17 10L10 3L3 10Z" fill="#6B6B6B"/></svg>`,
  text: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H17V7.2H15.6V4.4H10.7V15.6H12.8V17H7.2V15.6H9.3V4.4H4.4V7.2H3V3Z" fill="#6B6B6B"/></svg>`,
  vector: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.31687 12.7949C5.8606 13.1103 4.45446 12.3064 3 10.2493L4.09741 9.47337C5.45627 11.3952 6.39061 11.6203 7.03232 11.4813C7.40791 11.3999 7.80474 11.1749 8.245 10.8133C8.6847 10.4521 9.1183 9.99727 9.58402 9.50329C9.60337 9.48277 9.62278 9.46218 9.64224 9.44152C10.0788 8.97832 10.5454 8.4832 11.03 8.07115C11.5354 7.64148 12.1128 7.25529 12.7687 7.08788C13.4523 6.91337 14.1678 6.99037 14.8946 7.39445C15.5983 7.7857 16.2909 8.47036 17 9.4734L15.9026 10.2493C15.2537 9.33149 14.7003 8.82421 14.2415 8.56912C13.8058 8.32686 13.4421 8.3031 13.1011 8.39014C12.7323 8.48429 12.3395 8.72195 11.9006 9.09513C11.4739 9.45788 11.0529 9.90445 10.5984 10.3866C10.5863 10.3995 10.5741 10.4124 10.5619 10.4253C10.106 10.9089 9.61491 11.4273 9.09808 11.8518C8.58181 12.2759 7.99027 12.649 7.31687 12.7949Z" fill="#6B6B6B"/></svg>`,
  image: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 7.66667C14.6667 8.95533 13.622 10 12.3333 10C11.0447 10 10 8.95533 10 7.66667C10 6.378 11.0447 5.33333 12.3333 5.33333C13.622 5.33333 14.6667 6.378 14.6667 7.66667ZM13.5 7.66667C13.5 8.311 12.9777 8.83333 12.3333 8.83333C11.689 8.83333 11.1667 8.311 11.1667 7.66667C11.1667 7.02233 11.689 6.5 12.3333 6.5C12.9777 6.5 13.5 7.02233 13.5 7.66667Z" fill="#6B6B6B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58333 3C3.26117 3 3 3.26117 3 3.58333V16.4167C3 16.7388 3.26117 17 3.58333 17H16.4167C16.7388 17 17 16.7388 17 16.4167V3.58333C17 3.26117 16.7388 3 16.4167 3H3.58333ZM15.8333 4.75C15.8333 4.42783 15.5722 4.16667 15.25 4.16667H4.75C4.42783 4.16667 4.16667 4.42783 4.16667 4.75V11.3021L6.15531 9.31346C6.66787 8.8009 7.4989 8.8009 8.01147 9.31346L14.5313 15.8333H15.25C15.5722 15.8333 15.8333 15.5722 15.8333 15.25V4.75ZM4.16667 15.25V13.3645L7.08339 10.4478L12.4689 15.8333H4.75C4.42783 15.8333 4.16667 15.5722 4.16667 15.25Z" fill="#6B6B6B"/></svg>`
};

function createPaddingFrame(
  name: string,
  width: number,
  height: number,
  x: number,
  y: number,
  parent: FrameNode
) {
  const paddingFrame = figma.createFrame();
  paddingFrame.name = name;
  paddingFrame.resize(width, height);
  paddingFrame.fills = [{ type: 'SOLID', color: { r: 0, g: 0.49, b: 0 }, opacity: 0.3 }];
  paddingFrame.strokes = [{ type: 'SOLID', color: { r: 0, g: 0.49, b: 0 } }];
  paddingFrame.strokeWeight = 1;

  parent.appendChild(paddingFrame);
  parent.clipsContent = false;

  paddingFrame.layoutPositioning = 'ABSOLUTE';
  paddingFrame.x = x;
  paddingFrame.y = y;
  paddingFrame.clipsContent = false;

  // Set constraints based on parent layout mode
  if (parent.layoutMode === 'VERTICAL') {
    paddingFrame.constraints = {
      horizontal: 'STRETCH',
      vertical: y === 0 ? 'MIN' : 'MAX'
    };
  } else if (parent.layoutMode === 'HORIZONTAL') {
    paddingFrame.constraints = {
      horizontal: x === 0 ? 'MIN' : 'MAX',
      vertical: 'STRETCH'
    };
  } else {
    paddingFrame.constraints = { horizontal: 'CENTER', vertical: 'CENTER' };
  }

  return paddingFrame;
}

function createPaddingText(
  x: number,
  y: number,
  text: string,
  color: RGB,
  parent: FrameNode,
  textAlignHorizontal: 'LEFT' | 'CENTER' | 'RIGHT',
  constraints: Constraints
) {
  const paddingText = figma.createText();
  paddingText.fontName = { family: 'Inter', style: 'Bold' };
  paddingText.characters = text;
  paddingText.fontSize = 12;
  paddingText.fills = [{ type: 'SOLID', color: color }];
  paddingText.x = x;
  paddingText.y = y;
  paddingText.textAlignHorizontal = textAlignHorizontal;
  paddingText.constraints = constraints;


  parent.appendChild(paddingText);
  return paddingText;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate') {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.notify('No elements selected.');
      return;
    }

    const loadFonts = async () => {
      await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    };

    await loadFonts();
    const selectedNode = selection[0] as SceneNode;
    const nodeName = selectedNode.name.startsWith('Frame') ? 'First Layer' : selectedNode.name;

    // Create the main auto layout frame
    const mainFrame = figma.createFrame();
    mainFrame.name = 'Spec Doc';
    mainFrame.layoutMode = 'VERTICAL';
    mainFrame.counterAxisSizingMode = 'AUTO';
    mainFrame.primaryAxisSizingMode = 'AUTO';
    mainFrame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    mainFrame.paddingLeft = 64;
    mainFrame.paddingRight = 64;
    mainFrame.paddingTop = 64;
    mainFrame.paddingBottom = 64;
    mainFrame.itemSpacing = 64;

    mainFrame.x = selectedNode.x + selectedNode.width + 100;
    mainFrame.y = selectedNode.y;

    figma.currentPage.appendChild(mainFrame);

    // Create the title text node
    const title = figma.createText();
    title.fontName = { family: 'Inter', style: 'Bold' };
    title.characters = 'Layout and Spacing';
    title.fontSize = 48;
    title.textAutoResize = 'WIDTH_AND_HEIGHT';
    title.textAlignHorizontal = 'LEFT';
    title.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    mainFrame.appendChild(title);

    // Create the spec content frame
    const specContent = figma.createFrame();
    specContent.name = 'spec-content';
    specContent.layoutMode = 'HORIZONTAL';
    specContent.counterAxisSizingMode = 'AUTO';
    specContent.primaryAxisSizingMode = 'AUTO';
    specContent.itemSpacing = 64;
    specContent.fills = [];
    mainFrame.appendChild(specContent);

    // Create the canvas frame
    const canvas = figma.createFrame();
    canvas.name = 'canvas';
    canvas.layoutMode = 'VERTICAL';
    canvas.counterAxisSizingMode = 'AUTO';
    canvas.primaryAxisSizingMode = 'AUTO';
    canvas.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
    canvas.paddingLeft = 120;
    canvas.paddingRight = 120;
    canvas.paddingTop = 100;
    canvas.paddingBottom = 100;
    canvas.resize(Math.max(canvas.width, 630), canvas.height);
    specContent.appendChild(canvas);

    // Add the selected content to the canvas
    const clonedNode = selectedNode.clone() as FrameNode;
    clonedNode.x = 0;
    clonedNode.y = 0;
    canvas.appendChild(clonedNode);

    // Add overlay frame
    const overlay = figma.createFrame();
    overlay.name = 'overlay';
    overlay.resize(clonedNode.width, clonedNode.height);
    overlay.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 }, opacity: 0.8 }];
    clonedNode.appendChild(overlay);
  clonedNode.clipsContent = true;

  overlay.layoutPositioning = 'ABSOLUTE';
  overlay.x = 0;
  overlay.y = 0;

    // Extract padding values from the cloned node
    const paddingTop = clonedNode.paddingTop || 0;
    const paddingBottom = clonedNode.paddingBottom || 0;
    const paddingLeft = clonedNode.paddingLeft || 0;
    const paddingRight = clonedNode.paddingRight || 0;
    

    
    const paddingColor = { r: 0, g: 0.49, b: 0 }; // #007D00

    // Create the properties frame
    const properties = figma.createFrame();
    properties.name = 'properties';
    properties.layoutMode = 'VERTICAL';
    properties.counterAxisSizingMode = 'AUTO';
    properties.primaryAxisSizingMode = 'AUTO';
    properties.itemSpacing = 8;
    properties.fills = [];
    specContent.appendChild(properties);

    // Create the layer number badge frame
    const layerBadge = figma.createFrame();
    layerBadge.name = 'layer-badge';
    layerBadge.resize(24, 24);
    layerBadge.layoutMode = 'VERTICAL';
    layerBadge.counterAxisSizingMode = 'FIXED';
    layerBadge.primaryAxisSizingMode = 'FIXED';
    layerBadge.counterAxisAlignItems = 'CENTER';
    layerBadge.primaryAxisAlignItems = 'CENTER';
    layerBadge.layoutAlign = 'CENTER';
    layerBadge.cornerRadius = 100;
    layerBadge.fills = [{ type: 'SOLID', color: { r: 0.0745, g: 0.6824, b: 0.3608 } }];
    properties.appendChild(layerBadge);

    // Create the number text node
    const layerNumber = figma.createText();
    layerNumber.fontName = { family: 'Inter', style: 'Bold' };
    layerNumber.characters = '1';
    layerNumber.fontSize = 12;
    layerNumber.textAutoResize = 'WIDTH_AND_HEIGHT';
    layerNumber.textAlignHorizontal = 'CENTER';
    layerNumber.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    layerBadge.appendChild(layerNumber);

    // Create the header frame
    const header = figma.createFrame();
    header.name = 'header';
    header.layoutMode = 'HORIZONTAL';
    header.counterAxisSizingMode = 'AUTO';
    header.primaryAxisSizingMode = 'AUTO';
    header.itemSpacing = 8;
    properties.appendChild(header);

    // Create the icon frame
    const iconFrame = figma.createFrame();
    iconFrame.name = 'icon';
    iconFrame.resize(20, 20);
    header.appendChild(iconFrame);

    // Determine node type and set SVG icon accordingly
    let svgIcon = '';
    let attributeList: string[] = [];
    if (selectedNode.type === 'FRAME') {
      svgIcon = icons.frame;
      attributeList = [
        `Width: ${selectedNode.width}`,
        `Height: ${selectedNode.height}`,
        `X: ${selectedNode.x}`,
        `Y: ${selectedNode.y}`
      ];
      if ('layoutAlign' in selectedNode) attributeList.push(`Alignment: ${selectedNode.layoutAlign}`);
      if ('constraints' in selectedNode) attributeList.push(`Constraints: ${selectedNode.constraints}`);
      if ('paddingLeft' in selectedNode) attributeList.push(`Padding Left: ${selectedNode.paddingLeft}`);
      if ('paddingRight' in selectedNode) attributeList.push(`Padding Right: ${selectedNode.paddingRight}`);
      if ('paddingTop' in selectedNode) attributeList.push(`Padding Top: ${selectedNode.paddingTop}`);
      if ('paddingBottom' in selectedNode) attributeList.push(`Padding Bottom: ${selectedNode.paddingBottom}`);
      if ('itemSpacing' in selectedNode) attributeList.push(`Item Spacing: ${selectedNode.itemSpacing}`);
    } else if (selectedNode.type === 'GROUP') {
      svgIcon = icons.group;
      attributeList = [
        `Width: ${selectedNode.width}`,
        `Height: ${selectedNode.height}`,
        `X: ${selectedNode.x}`,
        `Y: ${selectedNode.y}`
      ];
    } else if (selectedNode.type === 'COMPONENT') {
      svgIcon = icons.component;
      attributeList = [
        `Width: ${selectedNode.width}`,
        `Height: ${selectedNode.height}`,
        `X: ${selectedNode.x}`,
        `Y: ${selectedNode.y}`
      ];
    } else if (selectedNode.type === 'INSTANCE') {
      svgIcon = icons.instance;
      attributeList = [
        `Width: ${selectedNode.width}`,
        `Height: ${selectedNode.height}`,
        `X: ${selectedNode.x}`,
        `Y: ${selectedNode.y}`
      ];
    } else if (selectedNode.type === 'TEXT') {
      svgIcon = icons.text;
      const textNode = selectedNode as TextNode;
      const fontName = textNode.fontName as FontName;
      const fontSize = typeof textNode.fontSize === 'number' ? textNode.fontSize : 'Mixed';
      attributeList = [
        `Font Family: ${fontName.family}`,
        `Font Style: ${fontName.style}`,
        `Font Size: ${fontSize}`,
        `Text: ${textNode.characters}`
      ];
    } else if (selectedNode.type === 'VECTOR') {
      svgIcon = icons.vector;
      attributeList = [
        `Width: ${selectedNode.width}`,
        `Height: ${selectedNode.height}`,
        `X: ${selectedNode.x}`,
        `Y: ${selectedNode.y}`
      ];
    } else if (selectedNode.type === 'RECTANGLE' && Array.isArray(selectedNode.fills) && selectedNode.fills.some((fill: Paint) => fill.type === 'IMAGE')) {
      svgIcon = icons.image;
      const imageNode = selectedNode as RectangleNode;
      attributeList = [
        `Width: ${imageNode.width}`,
        `Height: ${imageNode.height}`,
        `X: ${imageNode.x}`,
        `Y: ${imageNode.y}`
      ];
    }

    // Create the SVG icon node
    const iconNode = figma.createNodeFromSvg(svgIcon);
    iconNode.x = 0;
    iconNode.y = 0;
    iconFrame.appendChild(iconNode);

    // Create the "Zero State" text node
    const zeroStateText = figma.createText();
    zeroStateText.fontName = { family: 'Inter', style: 'Bold' };
    zeroStateText.characters = nodeName;
    zeroStateText.fontSize = 16;
    zeroStateText.textAutoResize = 'WIDTH_AND_HEIGHT';
    zeroStateText.textAlignHorizontal = 'LEFT';
    zeroStateText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    header.appendChild(zeroStateText);

    // Create the top padding frame
    const topPadding = createPaddingFrame(
      'padding-top',
      clonedNode.width,
      paddingTop,
      0,
      0,
      clonedNode
    );
    createPaddingText(
      -44,
      paddingTop / 2 - 6,
      `${paddingTop}px`,
      paddingColor,
      topPadding,
      'RIGHT',
      { horizontal: 'MIN', vertical: 'CENTER' }
    );

    // Create the bottom padding frame
    const bottomPadding = createPaddingFrame(
      'padding-bottom',
      clonedNode.width,
      paddingBottom,
      0,
      clonedNode.height - paddingBottom,
      clonedNode
    );
    createPaddingText(
      -44,
      paddingBottom / 2 - 6,
      `${paddingBottom}px`,
      paddingColor,
      bottomPadding,
      'RIGHT',
      { horizontal: 'MIN', vertical: 'CENTER' }
    );

    // Create the left padding frame
    const leftPadding = createPaddingFrame(
      'padding-left',
      paddingLeft,
      clonedNode.height,
      0,
      0,
      clonedNode
    );
    createPaddingText(
      paddingLeft / 2 - 6,
      -44,
      `${paddingLeft}px`,
      paddingColor,
      leftPadding,
      'CENTER',
      { horizontal: 'CENTER', vertical: 'MIN' }
    );

    // Create the right padding frame
    const rightPadding = createPaddingFrame(
      'padding-right',
      paddingRight,
      clonedNode.height,
      clonedNode.width - paddingRight,
      0,
      clonedNode
    );
    createPaddingText(
      paddingRight / 2 - 6,
      -44,
      `${paddingRight}px`,
      paddingColor,
      rightPadding,
      'CENTER',
      { horizontal: 'CENTER', vertical: 'MIN' }
    );


    // Create the attributes frame
    const attributes = figma.createFrame();
    attributes.name = 'attributes';
    attributes.layoutMode = 'VERTICAL';
    attributes.counterAxisSizingMode = 'AUTO';
    attributes.primaryAxisSizingMode = 'AUTO';
    attributes.itemSpacing = 4;
    properties.appendChild(attributes);

    // Add attributes to the attributes frame
    for (const attribute of attributeList) {
      const attributeText = figma.createText();
      attributeText.fontName = { family: 'Inter', style: 'Regular' };
      attributeText.characters = attribute;
      attributeText.fontSize = 12;
      attributeText.textAutoResize = 'WIDTH_AND_HEIGHT';
      attributeText.textAlignHorizontal = 'LEFT';
      attributeText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
      attributes.appendChild(attributeText);
    }

    // Make the new document the selection and focus on it
    figma.currentPage.selection = [mainFrame];
    figma.viewport.scrollAndZoomIntoView([mainFrame]);

    
  } else if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};



figma.on('selectionchange', async () => {
  const selection = figma.currentPage.selection;
  const selectionCount = selection.length;
  let imageUrl = null;

  if (selectionCount > 0) {
    const node = selection[0];
    const image = await node.exportAsync({ format: 'PNG' });
    imageUrl = 'data:image/png;base64,' + figma.base64Encode(image);
  }

  figma.ui.postMessage({ type: 'selectionchange', count: selectionCount, imageUrl });
});
